package com.leviti.backend.modules.user.service;

import com.leviti.backend.modules.category.service.DefaultCategoryService;
import com.leviti.backend.modules.settings.entity.SettingsEntity;
import com.leviti.backend.modules.settings.repository.SettingsRepository;
import com.leviti.backend.modules.user.dto.request.CreateUserRequest;
import com.leviti.backend.modules.user.dto.request.UpdateUserRequest;
import com.leviti.backend.modules.user.dto.response.UserResponse;
import com.leviti.backend.modules.user.entity.UserEntity;
import com.leviti.backend.modules.user.mapper.UserMapper;
import com.leviti.backend.modules.user.repository.UserRepository;
import com.leviti.backend.shared.exception.ConflictException;
import com.leviti.backend.shared.exception.ResourceNotFoundException;
import com.leviti.backend.modules.category.service.CategoryService;

import com.leviti.backend.modules.bank.repository.BankConnectionRepository;
import com.leviti.backend.modules.budget.repository.BudgetRepository;
import com.leviti.backend.modules.category.repository.CategoryRepository;
import com.leviti.backend.modules.transaction.repository.TransactionRepository;
import com.leviti.backend.modules.user.dto.response.ProfileStatisticsResponse;

import java.math.BigDecimal;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final UserMapper userMapper;

    private final SettingsRepository settingsRepository;

    private final DefaultCategoryService defaultCategoryService;

    private final TransactionRepository transactionRepository;

    private final CategoryRepository categoryRepository;

    private final BudgetRepository budgetRepository;

    private final BankConnectionRepository bankConnectionRepository;

    @Override
    public UserResponse create(
            CreateUserRequest request
    ) {

        if (userRepository.existsByEmail(
                request.email()
        )) {

            throw new ConflictException(
                    "User already exists."
            );

        }

        UserEntity entity =
                userMapper.toEntity(request);

        entity = userRepository.save(entity);

        SettingsEntity settings =
                SettingsEntity.builder()
                        .user(entity)
                        .theme("SYSTEM")
                        .language("ru")
                        .currency("RUB")
                        .monthStartDay((short) 1)
                        .emailNotifications(true)
                        .pushNotifications(true)
                        .budgetNotifications(true)
                        .build();

        settingsRepository.save(settings);

        defaultCategoryService.createDefaultCategories(
                entity
        );

        return userMapper.toResponse(entity);

    }

    @Override
    @Transactional(readOnly = true)
    public List<UserResponse> findAll() {

        return userRepository.findAll()
                .stream()
                .map(userMapper::toResponse)
                .toList();

    }

    @Override
    @Transactional(readOnly = true)
    public UserResponse findByIdResponse(
            UUID id
    ) {

        return userMapper.toResponse(
                findById(id)
        );

    }

    @Override
    @Transactional(readOnly = true)
    public UserEntity findById(
            UUID id
    ) {

        return userRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "User not found."
                        )
                );

    }

    @Override
    @Transactional(readOnly = true)
    public UserEntity findByEmail(
            String email
    ) {

        return userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "User not found."
                        )
                );

    }

    @Override
    public UserResponse update(
            UUID id,
            UpdateUserRequest request
    ) {

        UserEntity entity =
                findById(id);

        userMapper.updateEntity(
                request,
                entity
        );

        return userMapper.toResponse(
                userRepository.save(entity)
        );

    }

    @Override
    @Transactional(readOnly = true)
    public UserResponse getCurrentUser(
            String email
    ) {

        return userMapper.toResponse(
                findByEmail(email)
        );

    }

    @Override
    public UserResponse updateCurrentUser(
            String email,
            UpdateUserRequest request
    ) {

        UserEntity user =
                findByEmail(email);

        userMapper.updateEntity(
                request,
                user
        );

        return userMapper.toResponse(
                userRepository.save(user)
        );

    }

    @Override
    @Transactional(readOnly = true)
    public ProfileStatisticsResponse getProfileStatistics(
            String email
    ) {

        UserEntity user =
                findByEmail(email);

        UUID userId =
                user.getId();

        BigDecimal income =
                transactionRepository.getIncome(userId);

        BigDecimal expense =
                transactionRepository.getExpense(userId);

        Long operations =
                transactionRepository.getOperationsCount(userId);

        long categories =
                categoryRepository.countByUser_Id(userId);

        long budgets =
                budgetRepository.countByUser_Id(userId);

        long bankConnections =
                bankConnectionRepository.countByUser_Id(userId);

        BigDecimal balance =
                income.subtract(expense);

        long accounts =
                bankConnectionRepository.countByUser_Id(userId);

        return new ProfileStatisticsResponse(
                accounts,
                categories,
                budgets,
                operations,
                income,
                expense,
                balance
        );

    }

    @Override
    public void delete(
            UUID id
    ) {

        userRepository.delete(
                findById(id)
        );

    }

}
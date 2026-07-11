package com.leviti.backend.modules.transaction.mapper;

import com.leviti.backend.modules.transaction.dto.request.CreateTransactionRequest;
import com.leviti.backend.modules.transaction.dto.request.UpdateTransactionRequest;
import com.leviti.backend.modules.transaction.dto.response.TransactionResponse;
import com.leviti.backend.modules.transaction.entity.TransactionEntity;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface TransactionMapper {

    TransactionEntity toEntity(
            CreateTransactionRequest request
    );

    @Mapping(target = "categoryId", source = "category.id")
    @Mapping(target = "categoryName", source = "category.name")
    TransactionResponse toResponse(
            TransactionEntity entity
    );

    void updateEntity(
            UpdateTransactionRequest request,
            @MappingTarget TransactionEntity entity
    );

}
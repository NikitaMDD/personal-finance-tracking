package com.leviti.backend.modules.transaction.repository;

import com.leviti.backend.modules.transaction.entity.TransactionEntity;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;

public interface TransactionRepository
        extends JpaRepository<TransactionEntity, UUID> {

    List<TransactionEntity> findAllByUser_Id(
            UUID userId
    );

    Optional<TransactionEntity> findByIdAndUser_Id(
            UUID id,
            UUID userId
    );

    @Query("""
    SELECT COALESCE(SUM(t.amount),0)
    FROM TransactionEntity t
    WHERE t.user.id = :userId
    AND t.type = 'INCOME'
    """)
    BigDecimal getIncome(
            @Param("userId")
            UUID userId
    );

    @Query("""
    SELECT COALESCE(SUM(t.amount),0)
    FROM TransactionEntity t
    WHERE t.user.id = :userId
    AND t.type = 'EXPENSE'
    """)
    BigDecimal getExpense(
            @Param("userId")
            UUID userId
    );

    @Query("""
    SELECT
    c.name,
    SUM(t.amount)
    FROM TransactionEntity t
    JOIN t.category c
    WHERE t.user.id = :userId
    GROUP BY c.name
    ORDER BY SUM(t.amount) DESC
    """)
    List<Object[]> getCategoryStatistic(
            UUID userId
    );

    @Query("""
    SELECT
    FUNCTION('DATE_TRUNC','month',t.transactionDate),
    SUM(
    CASE
    WHEN t.type='INCOME'
    THEN t.amount
    ELSE 0
    END
    ),
    SUM(
    CASE
    WHEN t.type='EXPENSE'
    THEN t.amount
    ELSE 0
    END
    )
    
    FROM TransactionEntity t
    
    WHERE t.user.id=:userId
    
    GROUP BY FUNCTION('DATE_TRUNC','month',t.transactionDate)
    
    ORDER BY FUNCTION('DATE_TRUNC','month',t.transactionDate)
    """)
    List<Object[]> getMonthlyStatistic(
            UUID userId
    );

}
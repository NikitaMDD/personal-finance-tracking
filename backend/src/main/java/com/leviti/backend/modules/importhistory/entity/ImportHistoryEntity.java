package com.leviti.backend.modules.importhistory.entity;

import com.leviti.backend.common.base.AuditableEntity;
import com.leviti.backend.modules.bank.entity.BankConnectionEntity;

import jakarta.persistence.*;

import lombok.*;

@Entity
@Table(name = "import_history")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ImportHistoryEntity extends AuditableEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "bank_connection_id",
            nullable = false
    )
    private BankConnectionEntity bankConnection;

    @Column(nullable = false)
    private String fileName;

    @Column(nullable = false)
    private Integer importedRows;

    @Column(nullable = false)
    private String status;

}
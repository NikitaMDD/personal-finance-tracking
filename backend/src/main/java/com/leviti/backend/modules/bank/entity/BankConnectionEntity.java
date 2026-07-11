package com.leviti.backend.modules.bank.entity;

import com.leviti.backend.modules.user.entity.UserEntity;
import jakarta.persistence.*;
import lombok.*;

import java.time.OffsetDateTime;
import java.util.UUID;

@Entity
@Table(name = "bank_connections")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BankConnectionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "user_id",
            nullable = false
    )
    private UserEntity user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "bank_id",
            nullable = false
    )
    private BankEntity bank;

    @Column(nullable = false)
    private String externalAccountId;

    @Column(nullable = false)
    private Boolean connected;

    @Column(nullable = false)
    private OffsetDateTime connectedAt;

}
package com.leviti.backend.modules.settings.entity;

import com.leviti.backend.modules.user.entity.UserEntity;

import jakarta.persistence.*;

import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "settings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SettingsEntity {

    @Id
    private UUID id;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @Column(nullable = false)
    private String theme;

    @Column(nullable = false)
    private String language;

    @Column(nullable = false)
    private String currency;

    @Column(name = "month_start_day")
    private Integer monthStartDay;

    @Column(name = "email_notifications")
    private Boolean emailNotifications;

    @Column(name = "push_notifications")
    private Boolean pushNotifications;

    @Column(name = "budget_notifications")
    private Boolean budgetNotifications;

}
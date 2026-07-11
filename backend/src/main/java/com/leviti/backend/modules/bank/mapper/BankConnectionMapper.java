package com.leviti.backend.modules.bank.mapper;

import com.leviti.backend.modules.bank.dto.response.BankConnectionResponse;

import com.leviti.backend.modules.bank.entity.BankConnectionEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface BankConnectionMapper {

    @Mapping(
            target = "bankId",
            source = "bank.id"
    )
    @Mapping(
            target = "bankName",
            source = "bank.name"
    )
    @Mapping(
            target = "logo",
            source = "bank.logo"
    )
    @Mapping(
            target = "color",
            source = "bank.color"
    )
    BankConnectionResponse toResponse(
            BankConnectionEntity entity
    );

}
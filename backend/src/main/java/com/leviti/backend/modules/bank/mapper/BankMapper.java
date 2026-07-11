package com.leviti.backend.modules.bank.mapper;

import com.leviti.backend.modules.bank.dto.response.BankResponse;
import com.leviti.backend.modules.bank.entity.BankEntity;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BankMapper {

    BankResponse toResponse(
            BankEntity entity
    );

}
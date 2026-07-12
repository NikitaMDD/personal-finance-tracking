package com.leviti.backend.modules.category.service;

import com.leviti.backend.modules.user.entity.UserEntity;

public interface DefaultCategoryService {

    void createDefaultCategories(
            UserEntity user
    );

}
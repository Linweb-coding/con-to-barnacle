package com.example.demo.service;

import com.example.demo.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public interface CategoryService {
    List<Category> selectCategoryList(String q);

    //    @Override
    //    public List<Category> selectCategoryList() {
    //        return categoryRepository.findAll();
    //    }
    //模糊查询
    List<Category> findAll(Specification<Category> spec);


    Page selectCategoryList(String un, int pageNum, int pageSize);

    //新增（注册）
    Category update(Category category);
//    optional<Category> selectCategoryList(Long Id);
    //  判断用户名是否重复
    boolean codeIsExist(String code);

    void deleteCategories(List<String> categoryIds);

//    Page<Category> selectCategoryList(String q, int pageNum, int pageSize);

    }

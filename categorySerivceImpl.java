package com.example.demo.service.impl;

import com.example.demo.model.Category;
import com.example.demo.repository.CategoryRepository;
import com.example.demo.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class categorySerivceImpl implements CategoryService {



    @Autowired
    CategoryRepository categoryRepository;


    public void deleteCategories(List<String> categoryIds) {
        for (String categoryId : categoryIds) {
            categoryRepository.deleteById(Long.parseLong(categoryId));
        }
    }

    @Override
    public List<Category> selectCategoryList(String q) {
        return null;
    }

    @Override
    public Page selectCategoryList(String un, int pageNum, int pageSize) {
        //封装分页信息
        Pageable page= PageRequest.of(pageNum,pageSize);
        Specification<Category> spec = (root, query, cb) -> {
            return cb.or(
                    cb.like(root.get("aname"), "%" + un + "%"),
                    cb.like(root.get("code"), "%" + un + "%"),
                    cb.like(root.get("isShow"), "%" + un + "%")
            );
        };
        return categoryRepository.findAll(spec,page);
    }

    @Override
    public List<Category> findAll(Specification<Category> spec) {


        return null;
    }




    //    @Override
//    public List<Category> selectCategoryList() {
//        return categoryRepository.findAll();
//    }


    public Category update(Category category){
        return categoryRepository.saveAndFlush(category);}

    public boolean codeIsExist(String code) {
        return categoryRepository.existsByCode(code);
    }
}

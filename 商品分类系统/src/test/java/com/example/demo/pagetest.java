package com.example.demo;

import com.example.demo.repository.CategoryRepository;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class pagetest {
    @Autowired
    com.example.demo.service.CategoryService categoryService;
    @Test
    public void testFindByKeywordsAndPage() {
//     总页数


        System.out.println(categoryService.selectCategoryList("",0,2).getTotalPages());
//     当前页数据
        System.out.println( categoryService.selectCategoryList("",0,2).getContent());
    }
}

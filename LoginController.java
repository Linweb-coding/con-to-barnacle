package com.example.demo.controller;

import com.example.demo.model.Category;
import com.example.demo.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class LoginController {
    @Autowired
    private CategoryService categoryService;


//    @GetMapping("/index")
//    public String index(Model model) {
////        service   dao  findAll
//        model.addAttribute("cs",categoryService.selectCategoryList());
//        return "index";
//    }
//    @PostMapping("/update")
//    public String update(Category category) {
//        categoryService.update(category);
//        return "redirect:/category/list";
//    }
//    @GetMapping("/list")
//    public List<Category> findAll(){
//        return categoryService.selectCategoryList();
//    }
}

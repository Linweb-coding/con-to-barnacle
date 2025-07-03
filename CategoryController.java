package com.example.demo.controller;

import com.example.demo.model.Category;
import com.example.demo.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    CategoryService categoryService;
    @GetMapping("/codeIsExist")
    @ResponseBody
    public boolean codeIsExist(@RequestParam("code") String code) {
        try {
            return categoryService.codeIsExist(code);
        } catch (Exception e) {
            // 打印异常信息到控制台，方便调试
            e.printStackTrace();
            // 出现异常时返回 false 或抛出异常，根据实际情况处理
            return false;
        }
    }

    /**
     *
     * @param model
     * @param q
     * @param pageNum  默认为0，显示第1页的数据
     * @param pageSize 默认每页10条记录
     * @return
     */
    @GetMapping("/list")
    public String index(Model model,
                        @RequestParam(value = "qInfo",required = false) String q,
                        @RequestParam(value = "pageNum",required = false,defaultValue ="0") int pageNum,
                        @RequestParam(value = "pageSize",required = false,defaultValue ="10") int pageSize
    ) {

        model.addAttribute("cs", categoryService.selectCategoryList(q,pageNum,pageSize));
        return "index";
    }


    @PostMapping("/update")
    public String update(Category category) {
        categoryService.update(category);
        return "redirect:/category/list";
    }
}




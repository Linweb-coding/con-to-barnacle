//package com.example.demo.controller;
//
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
////业务控制类 request response
//@RestController
//public class HelloController {
//    @GetMapping("/hello")
//    public String hello(){
//        return "category";
//    }
//
//}
package com.example.demo.controller;
import com.example.demo.model.Category;
import com.example.demo.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//业务控制类 request response
@RestController
public class HelloController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/hello")
    public String hello() {return "xianhua";}

    @GetMapping("/path/{id}")
    public String path(@PathVariable("id") String id){
        return id;
    }
    @GetMapping("/para")
    public String para(@RequestParam("u") String u){
        return "aname="+u;
    }
    @PostMapping("/category/delete")
    public Map<String, Object> deleteCategories(@RequestBody List<String> categoryIds) {
        Map<String, Object> result = new HashMap<>();
        try {
            // 调用服务层的删除方法
            categoryService.deleteCategories(categoryIds);
            result.put("success", true);
            result.put("message", "删除成功");
        } catch (Exception e) {
            result.put("success", false);
            result.put("message", "删除失败：" + e.getMessage());
        }
        return result;
    }
}
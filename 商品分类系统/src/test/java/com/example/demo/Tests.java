package com.example.demo;

import com.example.demo.model.Category;
import com.example.demo.repository.CategoryRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public  class Tests {
    @Autowired
    CategoryRepository categoryRepository;
//查找全部id
    @Test
    public void testFindCategory(){
       System.out.println((categoryRepository.findAll()));
   }


//精确查找id
    @Test
    public void findId(){ System.out.println(categoryRepository.getOne(new Long(20000))); }

    @Test //添加新产品
    public void addCatrgory(){
        Category newCategory =new Category();
        newCategory.setAname("测试商品1");
        newCategory.setCode("4444");
        newCategory.setIsShow("1");
//        newCategory.setPid(20000);
        categoryRepository.save(newCategory); }

//修改测试
    @Test
    public void updateOne(){
        long categoryId = 20018;
        Category category = categoryRepository.getOne(categoryId);
        System.out.println("修改前：" + category);

        // 假设你想修改code属性
        category.setCode("5555");

        // 或者修改其他有效属性
         category.setAname("新名称");
         category.setIsShow("0");
        categoryRepository.save(category);
        category = categoryRepository.getOne(categoryId);
        System.out.println("修改后：" + category);
    }
    /**
     * 判断用户名是否存在
     */
    @Test
    public void testcodeIsExists() {

        String u="1";
        //若对象存在
        if(categoryRepository.existsByCode(u)){
            System.out.println("用户名存在，不能添加，请更改用户名");
        }else{
            System.out.println("可以添加");
        }
    }
    @Test
    public void testFindUsers() {
        System.out.println(categoryRepository.findAll());
    }

    /**
     * 测试分页
     */


    }




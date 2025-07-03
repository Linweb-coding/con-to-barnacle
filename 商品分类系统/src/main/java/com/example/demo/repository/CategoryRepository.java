package com.example.demo.repository; /**
 * @Repository 声明持久层（负责和数据库打交道）的类（接口）：
 */

import com.example.demo.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>, JpaSpecificationExecutor {
    // 修改方法名
    boolean existsByCode(String code);
    List<Category> findAll (Specification spec);
}

package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity//实体注解
@Data//Lombok简化代码
@Table(name = "category",schema = "shop")//实体对应的库及表
@AllArgsConstructor//全参构造
@NoArgsConstructor//无参构造

public class Category {

    @Id//主键
    @GeneratedValue(strategy = GenerationType.IDENTITY)//自动增长
    @Column(name = "id")//属性表中对应的列
    private  long id;

    @Basic
    @Column(name = "code")
    private String code;
    @Basic
    @Column(name = "aname")
    private String aname;

    @Basic
    @Column(name = "pid")
    private Long pid;

    @Basic
    @Column(name = "isShow")
    private String isShow;

//    public void setCode(String code) {
//    }
//
//    public void setId(long id) {
//        this.id = id;
//    }
//
//    public void setPid(long pid) {
//        this.pid = pid;
//    }
}

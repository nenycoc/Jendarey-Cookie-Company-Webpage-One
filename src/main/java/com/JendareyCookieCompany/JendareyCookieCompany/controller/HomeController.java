package com.JendareyCookieCompany.JendareyCookieCompany.controller;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@AllArgsConstructor
public class HomeController {






    @RequestMapping(value = "/menu")
    public String goToMenu(){
        return "/menu";
    }

    @RequestMapping("/about")
    public String goToAbout(){
        return "/about";
    }


    @RequestMapping("/cart")
    public String goToCart(){
        return "/cart";
    }

    @RequestMapping("/contact")
    public String goToContact(){
        return "/contact";
    }




}

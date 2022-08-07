package com.topuploan.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.topuploan.entity.feedbackModule;
import com.topuploan.service.feedbackService;

import java.util.List;

@RestController
@CrossOrigin (origins = "http://localhost:4200")
public class feedbackController {

    @Autowired
    private feedbackService service ;

    @PostMapping("/add")
    public feedbackModule saveData(@RequestBody feedbackModule module ){
        return service.saveDetails(module);
    }

    @GetMapping("/get")
    public List<feedbackModule> getModule() {
        return service.getAll();
    }
}

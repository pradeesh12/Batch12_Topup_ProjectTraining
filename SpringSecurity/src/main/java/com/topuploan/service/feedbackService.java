package com.topuploan.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.topuploan.dao.feedbackRepository;
import com.topuploan.entity.feedbackModule;

import java.util.List;

@Service
public class feedbackService {


    @Autowired
    private feedbackRepository repository ;

    public feedbackModule saveDetails(feedbackModule module){
        return repository.save(module);
    }
    public List<feedbackModule> getAll (){
        return repository.findAll();
    }
}

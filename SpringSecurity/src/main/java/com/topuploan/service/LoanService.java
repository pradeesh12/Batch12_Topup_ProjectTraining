package com.topuploan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.topuploan.dao.DocumentRepository;
import com.topuploan.dao.LoanRepository;
import com.topuploan.entity.LoanModel;


@Service
public class LoanService {
    @Autowired
    LoanRepository loanRepo;
    

    public LoanService(LoanRepository loanRepo, DocumentRepository docRepo) {
        super();
        this.loanRepo = loanRepo;
    }

    public LoanModel saveLoan(LoanModel loan) {
        return loanRepo.save(loan);
    }
  
}

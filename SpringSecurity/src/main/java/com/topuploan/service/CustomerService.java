package com.topuploan.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.topuploan.dao.LoanRepository;
import com.topuploan.entity.LoanModel;




@Service
public class CustomerService {
	@Autowired
	LoanRepository repo;

	
	public LoanModel getCustomer(Long id) {
		return repo.getByLoanId(id);
	}
}

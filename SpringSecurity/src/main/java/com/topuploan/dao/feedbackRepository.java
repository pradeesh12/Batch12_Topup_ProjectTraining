package com.topuploan.dao;


import org.springframework.data.jpa.repository.JpaRepository;

import com.topuploan.entity.feedbackModule;

public interface feedbackRepository extends JpaRepository<feedbackModule,Long> {
}

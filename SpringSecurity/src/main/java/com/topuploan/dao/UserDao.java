package com.topuploan.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.topuploan.entity.User;

@Repository
public interface UserDao extends CrudRepository<User, String>
{

}

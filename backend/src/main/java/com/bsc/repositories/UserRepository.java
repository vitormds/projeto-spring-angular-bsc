
package com.bsc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bsc.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
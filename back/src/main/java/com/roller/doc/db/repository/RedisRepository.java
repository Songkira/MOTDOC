package com.roller.doc.db.repository;

import com.roller.doc.db.entity.RedisEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@Component
public interface RedisRepository extends CrudRepository<RedisEntity,String> {

    Optional<RedisEntity> findByValue(String value);
}


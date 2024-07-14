package iishaan.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import iishaan.server.entity.LogEntity;

public interface LogRepository extends JpaRepository<LogEntity, Long> {

}

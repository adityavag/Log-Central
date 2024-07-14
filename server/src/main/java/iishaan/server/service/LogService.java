package iishaan.server.service;

import java.util.List;

import iishaan.server.model.Log;

public interface LogService {

    void ingestLog(Log log);

    List<Log> findByLevel(String level);

}

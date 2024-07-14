package iishaan.server.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import iishaan.server.entity.LogEntity;
import iishaan.server.model.Log;
import iishaan.server.repository.LogRepository;

@Service
public class LogSeviceImpl implements LogService{
    @Autowired
    LogRepository logRepository;
    @Override
    public void ingestLog(Log log) {
        LogEntity logEntity = new LogEntity();
        BeanUtils.copyProperties(log, logEntity);
        logRepository.save(logEntity);
    }

}

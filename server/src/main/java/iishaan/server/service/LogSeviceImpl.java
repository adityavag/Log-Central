package iishaan.server.service;

import java.util.List;
import java.util.stream.Collectors;

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
    @Override
    public List<Log> findByLevel(String level) {
        List<LogEntity> logEntities= logRepository.findByLevel(level);
        return logEntities.stream().map(log->new Log(
            log.getLevel(),
            log.getMessage(),
            log.getResourceId(),
            log.getTimestamp(),
            log.getTraceId(),
            log.getSpanId(),
            log.getCommit(),
            log.getMetadata()
        )).collect(Collectors.toList());
    }

}

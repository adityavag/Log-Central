package iishaan.server.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import iishaan.server.model.Log;
import iishaan.server.service.LogService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class LogController {
    @Autowired
    LogService logService;

    private final Logger logger = LoggerFactory.getLogger(LogController.class);

    @PostMapping("/logs")
    public ResponseEntity<String> ingestLog(@RequestBody Log log) {
        logger.info("Ingesting Log");
        logService.ingestLog(log);
        return ResponseEntity.ok("Success");
    }
}

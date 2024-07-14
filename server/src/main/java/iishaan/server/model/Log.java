package iishaan.server.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Log {
    private String level;
    private String message;
    private String resourceId;
    private String timestamp;
    private String traceId;
    private String spanId;
    private String commit;
    private String metadata;
}

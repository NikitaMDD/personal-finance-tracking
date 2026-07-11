package com.leviti.backend.shared.exception;
import lombok.Getter;

@Getter
public abstract class ApiException extends RuntimeException {
    private final int status;

    protected ApiException(
            int status,
            String message
    ) {
        super(message);
        this.status = status;
    }
}
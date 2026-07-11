package com.leviti.backend.shared.exception;

public class UnauthorizedException
        extends ApiException {
    public UnauthorizedException(
            String message
    ) {
        super(401, message);
    }
}
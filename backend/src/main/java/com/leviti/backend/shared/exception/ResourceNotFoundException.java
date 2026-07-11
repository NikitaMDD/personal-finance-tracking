package com.leviti.backend.shared.exception;

public class ResourceNotFoundException
        extends ApiException {
    public ResourceNotFoundException(
            String message
    ) {
        super(404, message);
    }
}
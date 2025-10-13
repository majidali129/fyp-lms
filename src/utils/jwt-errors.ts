

export class TokenExpiredError extends Error {
    constructor(message = 'Token has expired') {
        super(message);
        this.name = 'TokenExpiredError';
    }
}

export class InvalidSignatureError extends Error {
    constructor(message = 'Invalid token signature') {
        super(message);
        this.name = 'InvalidSignatureError';
    }
}

export class InvalidTokenTypeError extends Error {
    constructor(message = 'Invalid token type') {
        super(message);
        this.name = 'InvalidTokenTypeError';
    }
}

export class MalformedTokenError extends Error {
    constructor(message = 'Malformed token') {
        super(message);
        this.name = 'MalformedTokenError';
    }
}

export class TokenVerificationError extends Error {
    constructor(message = 'Token verification failed') {
        super(message);
        this.name = 'TokenVerificationError';
    }
}

export class TokenClaimValidationError extends Error {
    constructor(message = 'Invalid token claims (issuer/audience mismatch)') {
        super(message);
        this.name = 'TokenClaimValidationError';
    }}
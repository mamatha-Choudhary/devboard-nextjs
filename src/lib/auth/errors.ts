export class AuthError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.name = "AuthError";
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class UnauthorizedError extends AuthError {
  constructor(message = "Authentication required to access this resource.") {
    super(message, 401);
    this.name = "UnauthorizedError";
  }
}

export class ForbiddenError extends AuthError {
  constructor(message = "You do not have permission to access this resource.") {
    super(message, 403);
    this.name = "ForbiddenError";
  }
}

export class TokenExpiredError extends AuthError {
  constructor(message = "Session token has expired.") {
    super(message, 401);
    this.name = "TokenExpiredError";
  }
}

export class InvalidTokenError extends AuthError {
  constructor(message = "Session token is invalid or corrupt.") {
    super(message, 401);
    this.name = "InvalidTokenError";
  }
}

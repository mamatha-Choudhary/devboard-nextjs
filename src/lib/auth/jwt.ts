import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { AUTH_CONFIG } from "./auth-config";

export interface CustomJWTPayload extends JWTPayload {
  userId: string;
  email: string;
  role?: string;
}

const getEncodedSecret = (secret: string) => {
  return new TextEncoder().encode(secret);
};

/**
 * Generates an Access Token using jose.
 */
export async function createAccessToken(payload: CustomJWTPayload): Promise<string> {
  const secret = getEncodedSecret(AUTH_CONFIG.secrets.jwtSecret);
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: AUTH_CONFIG.tokens.algorithm })
    .setIssuedAt()
    .setExpirationTime(AUTH_CONFIG.tokens.accessToken.expiryString)
    .sign(secret);
}

/**
 * Verifies an Access Token using jose.
 */
export async function verifyAccessToken(token: string): Promise<CustomJWTPayload | null> {
  try {
    const secret = getEncodedSecret(AUTH_CONFIG.secrets.jwtSecret);
    const { payload } = await jwtVerify(token, secret, {
      algorithms: [AUTH_CONFIG.tokens.algorithm],
    });
    return payload as CustomJWTPayload;
  } catch {
    return null;
  }
}

/**
 * Generates a Refresh Token using jose.
 */
export async function createRefreshToken(payload: CustomJWTPayload): Promise<string> {
  const secret = getEncodedSecret(AUTH_CONFIG.secrets.refreshSecret);
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: AUTH_CONFIG.tokens.algorithm })
    .setIssuedAt()
    .setExpirationTime(AUTH_CONFIG.tokens.refreshToken.expiryString)
    .sign(secret);
}

/**
 * Verifies a Refresh Token using jose.
 */
export async function verifyRefreshToken(token: string): Promise<CustomJWTPayload | null> {
  try {
    const secret = getEncodedSecret(AUTH_CONFIG.secrets.refreshSecret);
    const { payload } = await jwtVerify(token, secret, {
      algorithms: [AUTH_CONFIG.tokens.algorithm],
    });
    return payload as CustomJWTPayload;
  } catch {
    return null;
  }
}

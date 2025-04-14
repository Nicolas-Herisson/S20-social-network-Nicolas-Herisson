import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
import jwt from "jsonwebtoken";

const scryptAsync = promisify(scrypt);


const KEY_LENGTH = 64;
const SALT_LENGTH = 16;

const generateSalt = () => randomBytes(SALT_LENGTH).toString("hex");

export async function hashPassword(password: string) :Promise<string> {

    if (!password) 
        throw new Error("Password is required");
    

    try {
        const salt = generateSalt();
        const key = await scryptAsync(password, salt, KEY_LENGTH) as Buffer;

        return `${salt}:${key.toString("hex")}`;
    } catch (error) {
        throw new Error(`Failed to hash password: ${(error as Error).message}`);
    }
};

export async function comparePassword(password: string, hash: string) :Promise<boolean> {
    if (!password || !hash) 
        throw new Error("Password and hash are required");
    

    try {
        const [salt, key] = hash.split(":");

        if (!salt || !key) 
            throw new Error("Invalid hash format");
        

        const keyBuffer = Buffer.from(key, "hex");
        const derivedKey = await scryptAsync(password, salt, KEY_LENGTH) as Buffer;
        return timingSafeEqual(keyBuffer, derivedKey);
    } catch (error) {
        throw new Error(`Failed to compare password: ${(error as Error).message}`);
    }
};

export function generateToken(user: User) :jwt.JwtPayload | null | string {
    const token = jwt.sign({
        username: user.username,
        email: user.email,
        id: user.id,
    }, process.env.JWT_SECRET!, {
        expiresIn: "1h"
    });
    return token;
};

interface User {
    username: string;
    email: string;
    id: string;
}

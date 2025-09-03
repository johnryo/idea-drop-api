import { loadEnvFile } from 'node:process';
loadEnvFile();

// Convert secret into Uint8Array
export const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

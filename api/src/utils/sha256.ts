import crypto from "crypto";

export function sha256(texto: string = ''): string {
  try { 
    return crypto
    .createHash("sha256")
    .update(texto)        
    .digest("hex");      
  }
  catch {
    return ''
  }
}
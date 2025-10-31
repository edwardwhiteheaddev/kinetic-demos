import { auth } from 'next-auth';
import { authConfig } from './auth-options';

export async function getSession() {
  return auth(authConfig);
}

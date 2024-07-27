'use server';

export async function getEnvConfig() {
  return {
    version: process.env.NEXT_APP_VERSION || 'v1.0.0'
  };
}

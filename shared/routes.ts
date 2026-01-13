import { z } from 'zod';
import { insertMessageSchema, services, partners, portfolio } from './schema';

export const errorSchemas = {
  validation: z.object({ message: z.string(), field: z.string().optional() }),
  notFound: z.object({ message: z.string() }),
  internal: z.object({ message: z.string() }),
};

export const api = {
  services: {
    list: {
      method: 'GET' as const,
      path: '/api/services',
      responses: { 200: z.array(z.custom<typeof services.$inferSelect>()) },
    },
  },
  partners: {
    list: {
      method: 'GET' as const,
      path: '/api/partners',
      responses: { 200: z.array(z.custom<typeof partners.$inferSelect>()) },
    },
  },
  portfolio: {
    list: {
      method: 'GET' as const,
      path: '/api/portfolio',
      responses: { 200: z.array(z.custom<typeof portfolio.$inferSelect>()) },
    },
  },
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertMessageSchema,
      responses: { 200: z.object({ success: z.boolean() }), 400: errorSchemas.validation },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

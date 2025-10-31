import { z } from 'zod';

export const roleSchema = z.enum(['OWNER', 'ADMIN', 'EDITOR', 'VIEWER']);
export type Role = z.infer<typeof roleSchema>;

export const tenantSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2),
  slug: z.string().min(2),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
export type Tenant = z.infer<typeof tenantSchema>;

export const userSchema = z.object({
  id: z.string().uuid(),
  tenantId: z.string().uuid(),
  email: z.string().email(),
  name: z.string(),
  role: roleSchema,
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
export type User = z.infer<typeof userSchema>;

export const kpiMetricSchema = z.object({
  id: z.string().uuid(),
  tenantId: z.string().uuid(),
  name: z.string(),
  description: z.string().optional(),
  category: z.string(),
  unit: z.string().default('count'),
  direction: z.enum(['up', 'down', 'neutral']).default('up'),
});
export type KPIMetric = z.infer<typeof kpiMetricSchema>;

export const kpiDataPointSchema = z.object({
  id: z.string().uuid(),
  metricId: z.string().uuid(),
  tenantId: z.string().uuid(),
  recordedAt: z.string().datetime(),
  value: z.number(),
  projected: z.boolean().default(false),
});
export type KPIDataPoint = z.infer<typeof kpiDataPointSchema>;

export const templateFieldSchema = z.object({
  key: z.string(),
  label: z.string(),
  type: z.enum(['string', 'number', 'currency', 'percentage', 'select', 'boolean']),
  description: z.string().optional(),
  options: z.array(z.string()).optional(),
  required: z.boolean().default(false),
});
export type TemplateField = z.infer<typeof templateFieldSchema>;

export const templateMetaSchema = z.object({
  id: z.string().uuid(),
  tenantId: z.string().uuid().optional(),
  slug: z.string(),
  name: z.string(),
  category: z.string(),
  summary: z.string(),
  fields: z.array(templateFieldSchema),
  tags: z.array(z.string()).default([]),
});
export type TemplateMeta = z.infer<typeof templateMetaSchema>;

export const templateInstanceSchema = z.object({
  id: z.string().uuid(),
  templateId: z.string().uuid(),
  tenantId: z.string().uuid(),
  ownerId: z.string().uuid(),
  name: z.string(),
  state: z.record(z.string(), z.any()),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
export type TemplateInstance = z.infer<typeof templateInstanceSchema>;

export const actionItemSchema = z.object({
  id: z.string().uuid(),
  tenantId: z.string().uuid(),
  title: z.string(),
  description: z.string().optional(),
  ownerId: z.string().uuid(),
  dueDate: z.string().datetime().optional(),
  status: z.enum(['open', 'in_progress', 'blocked', 'done']).default('open'),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
export type ActionItem = z.infer<typeof actionItemSchema>;

export const meetingSchema = z.object({
  id: z.string().uuid(),
  tenantId: z.string().uuid(),
  title: z.string(),
  agenda: z.string().optional(),
  facilitatorId: z.string().uuid(),
  cadence: z.enum(['weekly', 'monthly', 'quarterly', 'adhoc']),
  nextOccurrence: z.string().datetime().optional(),
});
export type Meeting = z.infer<typeof meetingSchema>;

export const authPayloadSchema = z.object({
  token: z.string(),
  refreshToken: z.string().optional(),
  user: userSchema,
});
export type AuthPayload = z.infer<typeof authPayloadSchema>;

export const apiErrorSchema = z.object({
  message: z.string(),
  statusCode: z.number().default(500),
  details: z.unknown().optional(),
});
export type ApiError = z.infer<typeof apiErrorSchema>;

export const analyticsScenarioSchema = z.object({
  id: z.string(),
  name: z.string(),
  assumptions: z.record(z.string(), z.number()),
  output: z.record(z.string(), z.number()),
});
export type AnalyticsScenario = z.infer<typeof analyticsScenarioSchema>;

export const aiQuerySchema = z.object({
  tenantId: z.string(),
  userId: z.string(),
  goal: z.string(),
  context: z.object({
    kpis: z.array(kpiMetricSchema).default([]),
    templates: z.array(templateMetaSchema).default([]),
  }),
});
export type AIQuery = z.infer<typeof aiQuerySchema>;

export const aiResponseSchema = z.object({
  summary: z.string(),
  suggestedActions: z.array(
    z.object({
      type: z.enum(['create_action_item', 'open_template', 'run_scenario']),
      payload: z.record(z.string(), z.any()).default({}),
    }),
  ),
  explanations: z.array(z.string()),
});
export type AIResponse = z.infer<typeof aiResponseSchema>;


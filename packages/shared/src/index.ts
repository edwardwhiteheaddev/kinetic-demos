export interface Tenant {
  id: string;
  name: string;
}

export interface User {
  id: string;
  email: string;
  tenantId: string;
}

export interface KPIMetric {
  id: string;
  name: string;
  value: number;
  templateInstanceId: string;
}

export interface TemplateMeta {
  id: string;
  name: string;
  description: string;
}

export interface TemplateField {
  id: string;
  name: string;
  type: "string" | "number" | "date";
}

export interface ActionItem {
  id: string;
  description: string;
  completed: boolean;
  templateInstanceId: string;
}

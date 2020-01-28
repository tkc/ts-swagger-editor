export type SwaggerVersion = "2.0";
export type SchemesType = ["https" | "http"];
export type ContentType = "object" | "string" | "number" | "integer" | "boolean" | "array" | "file";
export type CRUDType = "get" | "post" | "put" | "delete" | "head" | "options" | "trace" | "connect";

export type MIMETypes =
  | "application/json"
  | "application/xml"
  | "application/x-www-form-urlencoded"
  | "application/pdf"
  | "multipart/form-data"
  | "charset=utf-8"
  | "text/html"
  | "text/plain"
  | "image/png";

export type FormatType =
  | "int32"
  | "int64"
  | "float"
  | "double"
  | "double"
  | "double"
  | "date"
  | "date-time"
  | "password";

export type ResponsesStatusType =
  | "100"
  | "101"
  | "102"
  | "200"
  | "201"
  | "202"
  | "203"
  | "204"
  | "205"
  | "206"
  | "207"
  | "208"
  | "226"
  | "300"
  | "301"
  | "302"
  | "303"
  | "304"
  | "305"
  | "307"
  | "308"
  | "400"
  | "401"
  | "402"
  | "403"
  | "404"
  | "405"
  | "406"
  | "407"
  | "408"
  | "409"
  | "410"
  | "411"
  | "412"
  | "413"
  | "414"
  | "415"
  | "416"
  | "417"
  | "418"
  | "421"
  | "422"
  | "423"
  | "424"
  | "426"
  | "428"
  | "429"
  | "431"
  | "444"
  | "451"
  | "499"
  | "500"
  | "501"
  | "502"
  | "503"
  | "504"
  | "505"
  | "506"
  | "507"
  | "508"
  | "510"
  | "511"
  | "599";

type ValueOf<T> = T[keyof T];
type Property<T> = keyof T | ValueOf<{ [K in keyof T]: T[K] extends object ? Property<T[K]> : never }>;

type ParametersType<T> = {
  in?: "query" | "header" | "path" | "formData" | "body";
  name: Property<T[keyof T]>;
  type?: ContentType;
  items?: {
    type: ContentType;
  };
  required?: boolean;
  description?: string;
  default?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  enum?: (string | number)[];
};

export interface ResponsesType {
  description: string;
  schema?: {
    $ref?: string;
    type?: ContentType;
    properties?: {};
  };
}

export interface MethodParamType<T, U> {
  tags: T[];
  summary?: string;
  description?: string;
  operationId?: string;
  consumes?: MIMETypes[];
  produces?: MIMETypes[];
  parameters: ParametersType<U>[];
  responses: { [key in ResponsesStatusType]?: ResponsesType };
}

export interface Paths<T, U> {
  [key: string]: { [key in CRUDType]?: MethodParamType<T, U> };
}

export interface Definitions<T> {
  [key: string]: {
    title?: keyof T;
    type: ContentType;
    enum?: (string | number)[];
    properties?: {
      [key: string]: {
        type?: ContentType;
        title?: Property<T[keyof T]>;
        format?: FormatType;
        enum?: (string | number)[];
        items?: {
          $ref?: string;
          type?: ContentType;
        };
        $ref?: string;
      };
    };
    required?: [Property<T[keyof T]>];
  };
}

type SwaggerVersion = "2.0";

export interface Schema<T, U> {
  swagger: SwaggerVersion;
  info: {
    version: string;
    title: string;
    termsOfService?: string;
  };
  host: string;
  basePath: string;
  tags: { name: T; description?: string; externalDocs?: {} }[];
  schemes: SchemesType;
  paths: Paths<T, U>;
  definitions?: Definitions<U>;
}

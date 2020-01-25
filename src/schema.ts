import { Schema } from "./types";

export const schema: Schema = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "title",
    termsOfService: "termsOfService",
  },
  host: "example.com",
  basePath: "/api/v1",
  tags: [
    {
      name: "tag1",
      description: "description",
    },
  ],
  schemes: ["https"],
  paths: {
    "/auth": {
      post: {
        tags: ["tag1"],
        summary: "User authentication",
        description: "",
        operationId: "LoginUser",
        consumes: ["application/x-www-form-urlencoded"],
        produces: ["application/json"],
        parameters: [
          {
            in: "formData",
            name: "email",
            type: "string",
            description: "description",
          },
          {
            in: "formData",
            name: "password",
            type: "string",
            description: "description",
          },
        ],
        responses: {
          "200": {
            description: "description",
            schema: {
              $ref: "#/definitions/User",
            },
          },
          "401": {
            description: "description",
          },
          "500": {
            description: "description",
          },
        },
      },
    },
    "/users": {
      put: {
        tags: ["tag1"],
        consumes: ["application/x-www-form-urlencoded"],
        produces: ["application/json"],
        parameters: [
          {
            in: "formData",
            name: "email",
            type: "string",
            default: "default",
            required: true,
          },
          {
            in: "formData",
            name: "password",
            type: "string",
            default: "default",
          },
          {
            in: "formData",
            name: "role",
            type: "string",
            enum: ["enum1"],
            default: "enum1",
          },
        ],
        responses: {
          "200": {
            description: "description",
            schema: {
              $ref: "#/definitions/Users",
            },
          },
          "401": {
            description: "description",
          },
          "500": {
            description: "description",
          },
        },
      },
    },
  },
  definitions: {
    User: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          format: "int64",
        },
        email: {
          type: "string",
        },
        role: {
          type: "string",
          enum: ["enum1", "enum2"],
        },
      },
    },
    Users: {
      type: "object",
      properties: {
        list: {
          type: "array",
          items: {
            $ref: "#/definitions/User",
          },
        },
      },
    },
  },
};

export const SchemaJson = JSON.stringify(schema);

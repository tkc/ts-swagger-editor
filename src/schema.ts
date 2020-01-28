import { Schema } from "./types";

type Tags = "Auth" | "Store";

export interface Definitions {
  User: {
    name: string;
    email: string;
    password: string;
  };
}

export const schema: Schema<Tags, Definitions> = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "title",
  },
  host: "example.com",
  basePath: "/api/v1",
  tags: [
    {
      name: "Auth",
    },
    {
      name: "Store",
    },
  ],
  schemes: ["http"],
  paths: {
    "/user/login": {
      post: {
        consumes: ["multipart/form-data"],
        tags: ["Auth"],
        parameters: [
          {
            in: "formData",
            name: "email",
            type: "string",
          },
          {
            in: "formData",
            name: "name",
            type: "string",
          },
        ],
        responses: {
          "200": {
            description: "",
            schema: {
              $ref: "#/definitions/Account",
            },
          },
          "400": {
            description: "",
          },
          "401": {
            description: "",
          },
          "500": {
            description: "",
          },
        },
      },
    },
  },
  definitions: {
    User: {
      title: "User",
      type: "object",
      properties: {
        name: {
          type: "string",
          title: "email",
        },
        employeeCode: {
          type: "string",
          title: "name",
        },
      },
      required: ["name"],
    },
  },
};

export const SchemaJson = JSON.stringify(schema);

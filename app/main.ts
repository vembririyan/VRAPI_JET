import { express } from "./config";

import { mysqlPool, postgresPool } from "./connection";
import validation from "./validation";

export const router = express.Router();

export const PG = postgresPool;
export const MY = mysqlPool;

export const HttpStatus = {
  OK: { status: 200, message: "Success!" },
  CREATED: { status: 201, message: "Created!" },
  ACCEPTED: { status: 202, message: "Accepted!" },
  NO_CONTENT: { status: 204, message: "No Content!" },

  BAD_REQUEST: { status: 400, message: "Bad Request!" },
  UNAUTHORIZED: { status: 401, message: "Unauthorized!" },
  PAYMENT_REQUIRED: { status: 402, message: "Payment Required!" },
  FORBIDDEN: { status: 403, message: "Forbidden!" },
  NOT_FOUND: { status: 404, message: "Not Found!" },
  METHOD_NOT_ALLOWED: { status: 405, message: "Method Not Allowed!" },
  NOT_ACCEPTABLE: { status: 406, message: "Not Acceptable!" },
  REQUEST_TIMEOUT: { status: 408, message: "Request Timeout!" },
  CONFLICT: { status: 409, message: "Conflict!" },
  GONE: { status: 410, message: "Gone!" },
  PAYLOAD_TOO_LARGE: { status: 413, message: "Payload Too Large!" },
  UNSUPPORTED_MEDIA_TYPE: { status: 415, message: "Unsupported Media Type!" },
  VALIDATION_FAILED: { status: 422, message: "Validation Failed!" },
  TOO_MANY_REQUESTS: { status: 429, message: "Too Many Requests!" },

  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: "Internal Server Error!",
  },
} as const;

export { validation };

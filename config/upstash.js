import { Client as WorkflowClient } from "@upstash/workflow";

import { UPSTASH_TOKEN, UPSTASH_URL } from "./env.js";

export const workflowClient = new WorkflowClient({
  baseUrl: UPSTASH_URL,
  token: UPSTASH_TOKEN,
});

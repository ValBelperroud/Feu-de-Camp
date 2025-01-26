import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '1b2a60ba960096a3902162035a0a56bac18d81db', queries,  });
export default client;
  
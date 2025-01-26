import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'af7538eeb735cdebc9cb5463ded650395ee30da0', queries,  });
export default client;
  
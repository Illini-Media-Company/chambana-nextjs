import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "@/sanity/env";

const client = createClient({
  projectId,
  dataset,
  useCdn,
  apiVersion,
});

export default client;

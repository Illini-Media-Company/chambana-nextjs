export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-05-16";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "as6uze7t",
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

export const imageEndpoint =
  process.env.NEXT_PUBLIC_IMAGE_ENDPOINT ||
  `https://cdn.sanity.io/images/${projectId}/${dataset}/`;

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

import configPromise from "@payload-config";
import { getPayload } from "payload";

/**
 * Fetches user documents from the "users" collection and renders them as formatted JSON in a React component.
 *
 * Awaits the initialization of the payload instance using the provided configuration, retrieves all user documents, logs them to the console, and displays the complete data object in a `<div>`.
 *
 * @returns A React element containing the pretty-printed JSON representation of the user data.
 */
export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  });
  const data = await payload.find({
    collection: "users",
  });

  console.log({ data: data.docs });

  return <div>{JSON.stringify(data, null, 2)}</div>;
}

import { createClient } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { repositoryName } from "../prismicio";
import { components } from "../slices";

export default async function Home() {
  const client = createClient(repositoryName)
  const home = await client.getSingle("homepage")

  return (
    <SliceZone slices={home.data.slices} components={components} />
  );
}

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // change this
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_API_TOKEN, // or hardcode for local
});

async function syncWorldCharacters() {
  const worlds = await client.fetch('*[_type == "world"]{ _id }');
  for (const world of worlds) {
    const characters = await client.fetch(
      '*[_type == "character" && references($worldId)]{ _id }',
      { worldId: world._id },
    );
    await client
      .patch(world._id)
      .set({
        characters: characters.map(c => ({ _type: 'reference', _ref: c._id })),
      })
      .commit();
    console.log(
      `✔ Updated world: ${world._id} with ${characters.length} characters`,
    );
  }
}

async function syncMovieCharacters() {
  const movies = await client.fetch('*[_type == "movie"]{ _id }');
  for (const movie of movies) {
    const characters = await client.fetch(
      '*[_type == "character" && references($movieId)]{ _id }',
      { movieId: movie._id },
    );
    await client
      .patch(movie._id)
      .set({
        characters: characters.map(c => ({ _type: 'reference', _ref: c._id })),
      })
      .commit();
    console.log(
      `✔ Updated movie: ${movie._id} with ${characters.length} characters`,
    );
  }
}

async function syncAll() {
  await syncWorldCharacters();
  await syncMovieCharacters();
}

syncAll().catch(console.error);

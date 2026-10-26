import { getCollection as getEntries, type CollectionEntry } from 'astro:content';
import { collections } from './collections';
import type { LibraryLang } from './taxonomy';

export type LibraryResource = CollectionEntry<'resources'>['data'];

export type LibraryGroup = {
  id: string;
  name: string;
  resources: LibraryResource[];
};

// Broad collections that would swallow everything; a resource is filed under its most specific topic instead.
const UMBRELLAS = new Set(['essential-library', 'mathematical-foundations']);

export const isEssential = (resource: LibraryResource) => resource.collections.includes('essential-library');

export function topicsOf(resource: LibraryResource) {
  const specific = resource.collections.filter((id) => !UMBRELLAS.has(id));
  return specific.length ? specific : resource.collections.slice(-1);
}

const rank = (a: LibraryResource, b: LibraryResource) =>
  Number(isEssential(b)) - Number(isEssential(a)) ||
  (b.score.overall ?? 0) - (a.score.overall ?? 0) ||
  a.title.localeCompare(b.title);

/* Resources grouped by their primary topic, in the order defined in collections.json. */
export async function getLibraryGroups(lang: LibraryLang): Promise<LibraryGroup[]> {
  const entries = await getEntries('resources');
  const byTopic = new Map<string, LibraryResource[]>();

  for (const { data } of entries) {
    const [primary] = topicsOf(data);
    byTopic.set(primary, [...(byTopic.get(primary) ?? []), data]);
  }

  const known = collections.filter((collection) => byTopic.has(collection.id));
  const unknown = [...byTopic.keys()].filter((id) => !known.some((collection) => collection.id === id));

  return [
    ...known.map((collection) => ({ id: collection.id, name: collection.name[lang], resources: byTopic.get(collection.id)! })),
    ...unknown.map((id) => ({ id, name: id, resources: byTopic.get(id)! })),
  ].map((group) => ({ ...group, resources: group.resources.sort(rank) }));
}

import collectionsData from './collections.json';
import type { LibraryLang, LocalizedText, TaxonomyId } from './taxonomy';

export type CollectionKind = 'curated' | 'area' | 'topic';

export type LibraryCollection = {
  id: string;
  kind: CollectionKind;
  order: number;
  name: LocalizedText;
  description: LocalizedText;
  area?: TaxonomyId;
};

const parsedCollections = collectionsData.collections as LibraryCollection[];

export const collections = [...parsedCollections].sort(
  (a, b) => a.order - b.order,
);

export const collectionsById = Object.fromEntries(
  collections.map((collection) => [collection.id, collection]),
) as Record<string, LibraryCollection>;

export function getCollection(id: string) {
  return collectionsById[id];
}

export function getCollectionName(id: string, lang: LibraryLang) {
  return getCollection(id)?.name[lang] ?? id;
}

export function getCollectionDescription(id: string, lang: LibraryLang) {
  return getCollection(id)?.description[lang] ?? '';
}

export function resolveCollections(ids: readonly string[]) {
  return ids
    .map((id) => getCollection(id))
    .filter((collection): collection is LibraryCollection =>
      Boolean(collection),
    )
    .sort((a, b) => a.order - b.order);
}

export function getCollectionsByArea(area: string) {
  return collections.filter((collection) => collection.area === area);
}

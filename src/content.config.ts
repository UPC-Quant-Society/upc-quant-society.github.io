import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const resources = defineCollection({
  loader: glob({
    pattern: '**/*.json',
    base: './src/data/library/resources',
  }),

  schema: z.object({
    slug: z.string(),
    title: z.string(),

    description: z.object({
      ca: z.string(),
      en: z.string(),
    }),

    authors: z.array(z.string()).default([]),
    institution: z.string().optional(),

    type: z.enum([
      'book',
      'course',
      'paper',
      'notes',
      'repository',
      'dataset',
      'certification',
    ]),

    areas: z.array(z.string()),
    topics: z.array(z.string()).default([]),
    collections: z.array(z.string()).default([]),

    levels: z.array(
      z.enum([
        'introductory',
        'beginner',
        'intermediate',
        'advanced',
        'research',
      ]),
    ),

    languages: z.array(z.string()),
    year: z.number().int().optional(),

    access: z.enum([
      'open-access',
      'official-free',
      'freemium',
      'institutional',
      'paid',
      'subscription',
      'not-verified',
    ]),

    officialUrl: z.string().url(),

    materials: z.object({
      exercises: z.boolean().default(false),
      solutions: z.boolean().default(false),
      videos: z.boolean().default(false),
      code: z.boolean().default(false),
      datasets: z.boolean().default(false),
    }),

    score: z.object({
      overall: z.number().min(0).max(10).optional(),

      quality: z.number().min(0).max(10).optional(),
      pedagogy: z.number().min(0).max(10).optional(),
      quantRelevance: z.number().min(0).max(10).optional(),
      practicalValue: z.number().min(0).max(10).optional(),
      reputation: z.number().min(0).max(10).optional(),
      currency: z.number().min(0).max(10).optional(),
        accessibility: z.number().min(0).max(10).optional(),
        }),

    verification: z.object({
      status: z.enum([
        'official-source',
        'partially-verified',
        'pending',
      ]),
      checkedAt: z.string(),
    }),

    featured: z.boolean().default(false),
  }),
});

export const collections = {
  resources,
};
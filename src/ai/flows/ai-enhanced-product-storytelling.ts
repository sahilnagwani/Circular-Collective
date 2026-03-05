'use server';
/**
 * @fileOverview A Genkit flow for generating unique, compelling product narratives for luxury fashion items.
 *
 * - generateProductNarrative - A function that handles the generation of product narratives.
 * - GenerateProductNarrativeInput - The input type for the generateProductNarrative function.
 * - GenerateProductNarrativeOutput - The return type for the generateProductNarrative function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProductNarrativeInputSchema = z.object({
  productName: z.string().describe('The name of the luxury product.'),
  productDescription: z
    .string()
    .describe('A brief description of the product.'),
  productPrice: z.string().describe('The price of the product (e.g., "$500").'),
  productCondition: z
    .enum(['Vintage', 'Mint', 'Good'])
    .describe('The condition of the product.'),
  productMaterial: z
    .string()
    .describe(
      'The primary material of the product (e.g., "Denim", "Silk", "Organic Cotton").'
    ),
  productEra: z
    .string()
    .optional()
    .describe('The era or period the product belongs to (e.g., "1990s", "Art Deco").'),
  stockAvailability: z
    .string()
    .describe(
      'Information about the stock availability (e.g., "Only 1 Left", "In Stock").'
    ),
  waterSavedLitres: z
    .number()
    .optional()
    .describe('The amount of water saved in litres by choosing this product, if applicable.'),
  co2ReducedKg: z
    .number()
    .optional()
    .describe('The amount of CO2 emissions reduced in kilograms by choosing this product, if applicable.'),
});
export type GenerateProductNarrativeInput = z.infer<
  typeof GenerateProductNarrativeInputSchema
>;

const GenerateProductNarrativeOutputSchema = z.object({
  narrative: z.string().describe('A compelling, luxury-oriented narrative for the product.'),
});
export type GenerateProductNarrativeOutput = z.infer<
  typeof GenerateProductNarrativeOutputSchema
>;

export async function generateProductNarrative(
  input: GenerateProductNarrativeInput
): Promise<GenerateProductNarrativeOutput> {
  return aiEnhancedProductStorytellingFlow(input);
}

const productNarrativePrompt = ai.definePrompt({
  name: 'productNarrativePrompt',
  input: {schema: GenerateProductNarrativeInputSchema},
  output: {schema: GenerateProductNarrativeOutputSchema},
  prompt: `You are a luxury fashion copywriter for 'Circular Collective', a brand specializing in circular fashion and curated pre-loved luxury clothing. Your task is to craft a unique, compelling product narrative that emphasizes scarcity, authenticity, and sustainability for the following item.

Maintain a sophisticated, premium, and evocative tone. Highlight the item's history, quality, and its contribution to the circular economy. Make the reader feel like they are acquiring a rare, valuable piece with a story.

Product Details:
Name: {{{productName}}}
Description: {{{productDescription}}}
Price: {{{productPrice}}}
Condition: {{{productCondition}}}
Material: {{{productMaterial}}}
{{#if productEra}}Era: {{{productEra}}}{{/if}}
Availability: {{{stockAvailability}}}
{{#if waterSavedLitres}}Environmental Impact: Choosing this item saves approximately {{{waterSavedLitres}}} litres of water.{{/if}}
{{#if co2ReducedKg}}{{#if waterSavedLitres}} Additionally,{{else}}Environmental Impact:{{/if}} it reduces CO₂ emissions by about {{{co2ReducedKg}}} kg.{{/if}}

Create a narrative that is between 150-250 words.`,
});

const aiEnhancedProductStorytellingFlow = ai.defineFlow(
  {
    name: 'aiEnhancedProductStorytellingFlow',
    inputSchema: GenerateProductNarrativeInputSchema,
    outputSchema: GenerateProductNarrativeOutputSchema,
  },
  async (input) => {
    const {output} = await productNarrativePrompt(input);
    return output!;
  }
);

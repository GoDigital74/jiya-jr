import { defineType, defineField } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).error('Name is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required().error('Slug is required for routes'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'School Award', value: 'School Award' },
          { title: 'Business Award', value: 'Business Award' },
          { title: 'Regular Award', value: 'Regular Award' },
          { title: 'Gifts', value: 'Gifts' },
          { title: 'Sports Award', value: 'Sports Award' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (₹)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'sizes',
      title: 'Available Sizes & Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'sizeName',
              title: 'Size Label',
              type: 'string',
              description: 'The standard label (e.g., S, M, L, Small, Big)',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'dimension',
              title: 'Exact Dimension',
              type: 'string',
              description: 'Optional: The physical measurement (e.g., 11 inch, 11.5", 500g)',
            },
            {
              name: 'sizeImage',
              title: 'Image for this Size',
              type: 'image',
              options: { hotspot: true },
            },
          ],
          preview: {
            select: {
              title: 'sizeName',
              subtitle: 'dimension',
              media: 'sizeImage',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'colors',
      title: 'Available Metal Types & Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'colorName',
              title: 'Metal Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Gold', value: 'Gold' },
                  { title: 'Silver', value: 'Silver' },
                  { title: 'Copper', value: 'Copper' }, 
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'dimension',
              title: 'Metal Size / Dimension',
              type: 'string',
              description: 'Optional: Specify the size or weight for this metal (e.g., 500g, 12 inch).',
            },
            {
              name: 'colorImage',
              title: 'Image for this Metal Type',
              type: 'image',
              options: { hotspot: true },
              description: 'Optional: Upload a specific image to show this metal color.',
            },
          ],
          preview: {
            select: {
              title: 'colorName',
              media: 'colorImage',
            },
          },
        },
      ],
      description: 'Select the Metal types available and optionally attach images.',
    }),
    

    defineField({
      name: 'finishingType',
      title: 'Finishing Type',
      type: 'string',
      initialValue: 'Metal', 
      options: {
        list: [
          { title: 'Metal', value: 'Metal' },
          { title: 'Wooden', value: 'Wooden' },
        ],
        layout: 'dropdown', 
      },
      description: 'Select whether the product has a Wooden or Metal finish.',
    }),

    defineField({
      name: 'sku',
      title: 'SKU / Product ID',
      type: 'string',
      description: 'Enter a custom SKU for this product (e.g., JIY-1024).',
    }),
    defineField({
      name: 'description',
      title: 'Product Details',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})

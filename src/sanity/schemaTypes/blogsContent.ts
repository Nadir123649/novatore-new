import { defineArrayMember, defineField, defineType } from 'sanity'

export const blogsContent = defineType({
    name: "blogs",
    type: "document",
    title: "Blogs",
    fields: [
        defineField({
            name: "title",
            title: "Blog Title",
            type: "string"
        }),
        defineField({
            name: "sub_title",
            title: "Blog Sub Title",
            type: "string"
        }),
        defineField({
            name: "description",
            title: "Blog Description",
            type: "string"
        }),
        defineField({
            name: "image",
            title: "Blog Image",
            type: "image"
        })
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
})
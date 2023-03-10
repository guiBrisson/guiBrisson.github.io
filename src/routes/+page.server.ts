import { fail } from "@sveltejs/kit";
import { prisma } from "$lib/server/prisma";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        notes: await prisma.note.findMany()
    }
};

export const actions: Actions = {
    createNote: async ({ request }) => {
        const { content } = Object.fromEntries(await request.formData()) as {
            content: string,
        }

        try {
            if (content === '') return
            await prisma.note.create({
                data: {
                    content: content
                }
            })
        } catch (err) {
            console.error(err)
            return fail(500, { message: 'Could not create note' })
        }

        return {
            status: 201
        }
    },

    deleteNote: async ({ url }) => {
        const id = url.searchParams.get("id")
        if (!id) {
            return fail(400, { message: 'Invali request' })
        }

        try {
            await prisma.note.delete({
                where: {
                    id: Number(id)
                }
            })
        } catch (err) {
            console.error(err)
            return fail(500, { message: 'Something went wrong deleting your note' })
        }

        return {
            status: 200
        }
    }

};
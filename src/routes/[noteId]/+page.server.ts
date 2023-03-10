import type { PageServerLoad, Actions } from "./$types";
import { prisma } from "$lib/server/prisma";
import { error, fail } from "@sveltejs/kit"
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {

    const getNote = async () => {
        const note = await prisma.note.findUnique({
            where: {
                id: Number(params.noteId)
            }
        })

        if (!note) {
            console.log('VISH')
            throw error(404, { message: 'Note not found' })
        }
        return note
    }

    return {
        note: getNote()
    }
};

export const actions: Actions = {
    updateNote: async ({ request, params }) => {
        const { content } = Object.fromEntries(await request.formData()) as { content: string }

        try {
            await prisma.note.update({
                where: {
                    id: Number(params.noteId)
                },
                data: {
                    content: content
                }
            })
        } catch (err) {
            console.error(err);
            return fail(500, { message: 'Could not update note' })
            
        }
        throw redirect(302, '/');
    }
};
import { p as prisma } from "../../../chunks/prisma.js";
import { f as fail, r as redirect, e as error } from "../../../chunks/index.js";
const load = async ({ params }) => {
  const getNote = async () => {
    const note = await prisma.note.findUnique({
      where: {
        id: Number(params.noteId)
      }
    });
    if (!note) {
      console.log("VISH");
      throw error(404, { message: "Note not found" });
    }
    return note;
  };
  return {
    note: getNote()
  };
};
const actions = {
  updateNote: async ({ request, params }) => {
    const { content } = Object.fromEntries(await request.formData());
    try {
      await prisma.note.update({
        where: {
          id: Number(params.noteId)
        },
        data: {
          content
        }
      });
    } catch (err) {
      console.error(err);
      return fail(500, { message: "Could not update note" });
    }
    throw redirect(302, "/");
  }
};
export {
  actions,
  load
};

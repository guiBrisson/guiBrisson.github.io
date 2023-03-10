import { f as fail } from "../../chunks/index.js";
import { p as prisma } from "../../chunks/prisma.js";
const load = async () => {
  return {
    notes: await prisma.note.findMany()
  };
};
const actions = {
  createNote: async ({ request }) => {
    const { content } = Object.fromEntries(await request.formData());
    try {
      if (content === "")
        return;
      await prisma.note.create({
        data: {
          content
        }
      });
    } catch (err) {
      console.error(err);
      return fail(500, { message: "Could not create note" });
    }
    return {
      status: 201
    };
  },
  deleteNote: async ({ url }) => {
    const id = url.searchParams.get("id");
    if (!id) {
      return fail(400, { message: "Invali request" });
    }
    try {
      await prisma.note.delete({
        where: {
          id: Number(id)
        }
      });
    } catch (err) {
      console.error(err);
      return fail(500, { message: "Something went wrong deleting your note" });
    }
    return {
      status: 200
    };
  }
};
export {
  actions,
  load
};

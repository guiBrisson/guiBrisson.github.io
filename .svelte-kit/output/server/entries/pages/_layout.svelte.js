import { c as create_ssr_component } from "../../chunks/index2.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="grid place-content-center content-start bg-gray-100 min-h-screen"><div class="flow mt-16 w-[500px]">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};

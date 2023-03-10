import { c as create_ssr_component, f as createEventDispatcher, v as validate_component } from "../../../chunks/index2.js";
const Keydown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let combination;
  let { paused = false } = $$props;
  let { pauseOnInput = false } = $$props;
  let { separator = "-" } = $$props;
  const dispatch = createEventDispatcher();
  let combo = [];
  if ($$props.paused === void 0 && $$bindings.paused && paused !== void 0)
    $$bindings.paused(paused);
  if ($$props.pauseOnInput === void 0 && $$bindings.pauseOnInput && pauseOnInput !== void 0)
    $$bindings.pauseOnInput(pauseOnInput);
  if ($$props.separator === void 0 && $$bindings.separator && separator !== void 0)
    $$bindings.separator(separator);
  combination = combo.join(separator);
  combo.reduce((keys, key) => ({ ...keys, [key]: true }), {});
  {
    if (combo.length > 0)
      dispatch("combo", combination);
  }
  return ``;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let note;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ note } = data);
  return `${validate_component(Keydown, "Keydown").$$render($$result, {}, {}, {})}
<form class="drop-shadow-md" action="?/updateNote" method="POST"><textarea class="p-3 w-full bg-white h-80 max-h-80 min-h-[50px]" id="content" name="content" placeholder="Type your note here...">${note.content || ""}</textarea>
	<div class="flex justify-between p-3 items-center bg-gray-100 w-full"><span><span class="px-1 bg-gray-200 rounded-md mx-1">esc</span>to cancel</span>
		<button class="bg-blue-600 text-white px-2 rounded-md" type="submit">Edit</button></div></form>`;
});
export {
  Page as default
};

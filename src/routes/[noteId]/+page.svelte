<script lang="ts">
	import type { PageData } from './$types';
	import Keydown from 'svelte-keydown';

	export let data: PageData;
	$: ({ note } = data);
</script>

<Keydown on:Escape={() => history.back()} />
<form class="drop-shadow-md" action="?/updateNote" method="POST">
	<textarea
		class="p-3 w-full bg-white h-80 max-h-80 min-h-[50px]"
		id="content"
		name="content"
		bind:value={note.content}
		placeholder="Type your note here..."
	/>
	<div class="flex justify-between p-3 items-center bg-gray-100 w-full">
		<span><span class="px-1 bg-gray-200 rounded-md mx-1">esc</span>to cancel</span>
		<button class="bg-blue-600 text-white px-2 rounded-md" type="submit">Edit</button>
	</div>
</form>

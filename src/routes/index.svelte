<script lang="ts">
    import TiDocumentAdd from 'svelte-icons/ti/TiDocumentAdd.svelte';

    import NoteList from '$lib/components/NoteList.svelte';
</script>

<main class="m-2 min-h-[75vh] card card-bordered flex flex-row">
    <div class="basis-1/4 p-4">
        <NoteList />
        <button class="btn btn-outline btn-primary w-full flex flex-row justify-center">
            <span class="w-8 h-8">
                <TiDocumentAdd />
            </span>
        </button>
    </div>
    <div class="basis-3/4" />
</main>

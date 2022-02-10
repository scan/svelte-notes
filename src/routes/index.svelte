<script lang="ts">
    import NoteList from "$lib/components/NoteList.svelte";
</script>

<main class="m-2 min-h-[75vh] card card-bordered flex flex-row">
    <div class="basis-1/4">
        <NoteList />
        <div class="card card-bordered">
            Add note
        </div>
    </div>
    <div class="basis-3/4" />
</main>

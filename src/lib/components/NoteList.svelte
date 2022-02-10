<script lang="ts">
    import { liveQuery } from 'dexie';

    import database from '$lib/db';

    let notes = liveQuery(() => database.notes.toArray());
</script>

{@debug $notes}

{#if $notes}
    {#each $notes as note (note.id)}
        <slot {note} />
    {/each}
{/if}

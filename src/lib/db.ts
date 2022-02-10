import type { Table } from 'dexie';
import Dexie from 'dexie';

export interface Note {
    id?: string;
    title: string;
    content: string;
    createdAt?: Date;
}

export class NoteDatabase extends Dexie {
    notes!: Table<Note>;

    constructor() {
        super('svelte-notes');

        this.version(1).stores({
            notes: '[id], title, content, createdAt',
        });
    }
}

const database = new NoteDatabase();

export default database;

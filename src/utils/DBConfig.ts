import Dexie from "dexie";

const db = new Dexie("keep");
db.version(1).stores({ activeNotes: "id, title, body" });
db.version(1).stores({ archivedNotes: "id, title, body" });
db.version(1).stores({ pinnedNotes: "id, title, body" });
export default db;

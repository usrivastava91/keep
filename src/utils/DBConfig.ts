// export const DBConfig = {
//   name: "keep",
//   version: 1,
//   objectStoresMeta: [
//     {
//       store: "allNotes",
//       storeConfig: { keyPath: "id", autoIncrement: true },
//       storeSchema: [
//         {
//           title: "title",
//           body: "body",
//           keypath: "title",
//           options: { unique: false },
//         },
//       ],
//     },
//     {
//       store: "activeNotes",
//       storeConfig: { keyPath: "id", autoIncrement: true },
//       storeSchema: [
//         {
//           title: "title",
//           body: "body",
//           keypath: "id",
//           options: { unique: false },
//         },
//       ],
//     },
//     {
//       store: "archivedNotes",
//       storeConfig: { keyPath: "id", autoIncrement: true },
//       storeSchema: [
//         {
//           title: "title",
//           body: "body",
//           keypath: "id",
//           options: { unique: false },
//         },
//       ],
//     },
//   ],
// };

import Dexie from "dexie";

const db = new Dexie("keep");
db.version(1).stores({ activeNotes: "id, title, body" });
db.version(1).stores({ archivedNotes: "id, title, body" });
db.version(1).stores({ pinnedNotes: "id, title, body" });
export default db;

import { IRoute } from "./Route";
import { ActiveNotes } from "../components/ActiveNotes";
import { ArchivedNotes } from "../components/ArchivedNotes";
import { SearchResults } from "../components/SearchResults";
import { Note } from "../components/Note";
const ActiveNotesRoute: IRoute = {
  path: "/active",
  component: ActiveNotes,
};

const ArchivedNotesRoute: IRoute = {
  path: "/archived",
  component: ArchivedNotes,
};

const SearchResultsRoute: IRoute = {
  path: "/search",
  component: SearchResults,
};

const NoteRoute: IRoute = {
  path: "/note/:id/:title/:body/:type",
  component: Note,
};
export const appRoutes: IRoute[] = [
  ActiveNotesRoute,
  ArchivedNotesRoute,
  SearchResultsRoute,
  NoteRoute,
];

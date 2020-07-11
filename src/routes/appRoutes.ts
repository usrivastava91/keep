import { IRoute } from "./Route";
import { ActiveNotes } from "../components/ActiveNotes";
import { ArchievedNotes } from "../components/ArchievedNotes";
import { SearchResults } from "../components/SearchResults";

const ActiveNotesRoute: IRoute = {
  path: "/active",
  component: ActiveNotes,
};

const ArchievedNotesRoute: IRoute = {
  path: "/archieved",
  component: ArchievedNotes,
};

const SearchResultsRoute: IRoute = {
  path: "/search",
  component: SearchResults,
};

export const appRoutes: IRoute[] = [
  ActiveNotesRoute,
  ArchievedNotesRoute,
  SearchResultsRoute,
];

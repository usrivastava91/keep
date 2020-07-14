import { IRoute } from "./Route";
import { ActiveNotes } from "../components/ActiveNotes";
import { ArchivedNotes } from "../components/ArchivedNotes";
import { SearchResults } from "../components/SearchResults";

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

export const appRoutes: IRoute[] = [
  ActiveNotesRoute,
  ArchivedNotesRoute,
  SearchResultsRoute,
];

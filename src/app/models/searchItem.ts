import { Filters } from "./filters";
import { Results } from "./results";

export class SearchItems {
    siteId: string = '';
    countryDefaultTimeZone: string = '';
    query: string = '';
    filters: Array<Filters> = [];
    paging: string = '';
    results: Array<Results> = [];
    sort: string = '';
    availableSorts: Array<string> = [];
    availableFilters: Array<string> = [];
} 
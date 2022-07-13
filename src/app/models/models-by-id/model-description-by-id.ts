import { Snapshot } from "./snapshot";

export interface ModelDescriptionById {
    text:         string;
    plain_text:   string;
    last_updated: Date;
    date_created: Date;
    snapshot:     Snapshot;
}

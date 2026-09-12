import { TempMailApiByBoomlifyEntityBase } from '../TempMailApiByBoomlifyEntityBase';
import type { TempMailApiByBoomlifySDK } from '../TempMailApiByBoomlifySDK';
import type { Control } from '../types';
import type { Inbox, InboxLoadMatch } from '../TempMailApiByBoomlifyTypes';
declare class InboxEntity extends TempMailApiByBoomlifyEntityBase<Inbox> {
    constructor(client: TempMailApiByBoomlifySDK, entopts: any);
    make(this: InboxEntity): InboxEntity;
    load(this: any, reqmatch?: InboxLoadMatch, ctrl?: Control): Promise<InboxEntity>;
}
export { InboxEntity };

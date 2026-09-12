import { TempMailApiByBoomlifyEntityBase } from '../TempMailApiByBoomlifyEntityBase';
import type { TempMailApiByBoomlifySDK } from '../TempMailApiByBoomlifySDK';
import type { Control } from '../types';
import type { Domain, DomainLoadMatch } from '../TempMailApiByBoomlifyTypes';
declare class DomainEntity extends TempMailApiByBoomlifyEntityBase<Domain> {
    constructor(client: TempMailApiByBoomlifySDK, entopts: any);
    make(this: DomainEntity): DomainEntity;
    load(this: any, reqmatch?: DomainLoadMatch, ctrl?: Control): Promise<DomainEntity>;
}
export { DomainEntity };

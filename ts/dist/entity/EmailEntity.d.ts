import { TempMailApiByBoomlifyEntityBase } from '../TempMailApiByBoomlifyEntityBase';
import type { TempMailApiByBoomlifySDK } from '../TempMailApiByBoomlifySDK';
import type { Control } from '../types';
import type { Email, EmailCreateData } from '../TempMailApiByBoomlifyTypes';
declare class EmailEntity extends TempMailApiByBoomlifyEntityBase<Email> {
    constructor(client: TempMailApiByBoomlifySDK, entopts: any);
    make(this: EmailEntity): EmailEntity;
    create(this: any, reqdata?: EmailCreateData, ctrl?: Control): Promise<EmailEntity>;
}
export { EmailEntity };

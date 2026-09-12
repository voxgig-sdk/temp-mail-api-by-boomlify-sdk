import { DomainEntity } from './entity/DomainEntity';
import { EmailEntity } from './entity/EmailEntity';
import { InboxEntity } from './entity/InboxEntity';
export type * from './TempMailApiByBoomlifyTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { TempMailApiByBoomlifyEntityBase } from './TempMailApiByBoomlifyEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class TempMailApiByBoomlifySDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Domain(entopts?: Record<string, any>): DomainEntity;
    Email(entopts?: Record<string, any>): EmailEntity;
    Inbox(entopts?: Record<string, any>): InboxEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): TempMailApiByBoomlifySDK;
    tester(testopts?: any, sdkopts?: any): TempMailApiByBoomlifySDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof TempMailApiByBoomlifySDK;
export { stdutil, config, BaseFeature, TempMailApiByBoomlifyEntityBase, TempMailApiByBoomlifySDK, SDK, };

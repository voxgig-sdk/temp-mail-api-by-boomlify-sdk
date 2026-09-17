export interface Domain {
    domains?: any[];
}
export interface DomainLoadMatch {
    domains?: any[];
}
export interface Email {
}
export interface EmailCreateData {
    $action?: string;
    [action: string]: any;
}
export interface Inbox {
    email?: string;
    id?: string;
    messageCount?: number;
    messages?: any[];
}
export interface InboxLoadMatch {
    id: string;
    limit?: number;
    preview?: boolean;
    token: string;
}

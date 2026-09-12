export interface Domain {
    domains?: any[];
}
export interface DomainLoadMatch {
    domains?: any[];
}
export interface Email {
    createdAt?: string;
    domain?: string;
    email?: string;
    expiresAt?: string;
    expiry?: string;
    token?: string;
    username?: string;
}
export interface EmailCreateData {
    createdAt?: string;
    domain?: string;
    email?: string;
    expiresAt?: string;
    expiry?: string;
    token?: string;
    username?: string;
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

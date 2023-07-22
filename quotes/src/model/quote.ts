export interface Quote {
    id: string;
    author: string | 'unknown';
    category: string | '_';
    quote: string;
    reference?: string;
    translation?: string;
    url?: string;
}

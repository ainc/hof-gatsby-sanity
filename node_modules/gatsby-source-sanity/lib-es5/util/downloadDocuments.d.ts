import { SanityDocument } from '../types/sanity';
export default function downloadDocuments(url: string, token?: string, options?: {
    includeDrafts?: boolean;
}): Promise<Map<string, SanityDocument>>;

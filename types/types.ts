export type Role = 'owner' | 'admin' | 'editor' | 'viewer';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface Organization {
  id: string;
  name: string;
  slug: string; // e.g., app.datachat.ai/org-slug/dashboard
  plan: 'free' | 'pro' | 'enterprise';
}

// The intersection of a User and an Organization
export interface OrganizationMember {
  userId: string;
  orgId: string;
  role: Role;
  joinedAt: string;
  user?: User; // Hydrated user data
}

// --- RAG & Knowledge Base ---

export type DocumentStatus = 'uploading' | 'processing' | 'indexed' | 'failed';

export interface Document {
  id: string;
  orgId: string; // Documents belong to Org, not User
  name: string;
  type: 'pdf' | 'docx' | 'txt' | 'csv' | 'notion';
  url?: string; // S3/Blob storage URL
  size: string;
  uploadDate: string;
  lastUpdated?: string;
  status: DocumentStatus;
  vectorCount: number;
  tags?: string[];
  wordCount?: string;
}

// Represents a vector chunk (usually handled on backend, but useful for debug views)
export interface DocumentChunk {
  id: string;
  documentId: string;
  content: string;
  pageNumber?: number;
  score?: number; // Similarity score for search results
}

// --- Chat System ---

export interface ChatSession {
  id: string;
  orgId: string;
  userId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  dateLabel?: string; // 'Today', 'Yesterday' (Computed on frontend)
}

export interface ChatMessage {
  id: string;
  sessionId: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  citations?: Citation[];
  status?: 'loading' | 'streaming' | 'complete' | 'error';
}

export interface Citation {
  id: string;
  chunkId: string;
  documentId: string;
  sourceName: string; // Denormalized for UI speed
  page?: number;
  snippet?: string;
  relevanceScore?: number;
}

// --- UI / Dashboard ---

export interface Metric {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon: React.ElementType;
}

export enum Tab {
  OVERVIEW = 'Overview',
  KNOWLEDGE_BASE = 'Knowledge Base',
  CHAT = 'Chat',
  SETTINGS = 'Settings',
}

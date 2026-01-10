"use client"
import { ChevronDown, MessageSquare, Plus, Sparkle, Sparkles } from "lucide-react"
import { useState } from "react";

export interface ChatSession {
    id: string;
    orgId: string;
    userId: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    dateLabel?: string;
}


const MOCK_HISTORY: ChatSession[] = [
    { id: '1', title: 'Q3 Revenue Analysis', dateLabel: 'Today', orgId: 'org-1', userId: 'user-1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '2', title: 'HR Policy Summary', dateLabel: 'Today', orgId: 'org-1', userId: 'user-1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '3', title: 'Engineering Onboarding', dateLabel: 'Yesterday', orgId: 'org-1', userId: 'user-1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: '4', title: 'Project Alpha Requirements', dateLabel: 'Last Week', orgId: 'org-1', userId: 'user-1', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
];

const SUGGESTED_QUESTIONS_MOCK = [
    "Summarize the employee handbook",
    "What is the Q3 Revenue growth?",
    "How do i reset my VPN password",
]



export const FullPageChat: React.FC = () => {
    const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
    const [model, setModel] = useState(null)
    return (
        <div className="flex h-[calc(100vh-64px)] bg-white overflow-hidden">

            {/* Left Sidebar: Chat History */}
            <div className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col">
                <div className="p-4">
                    <button
                        onClick={() => console.log("hi")}
                        className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg shadow-sm transition-all font-medium text-sm"
                    >
                        <Plus className="w-4 h-4" />
                        <span>New Chat</span>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-3 py-2 space-y-6">
                    <div>
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">Today</h4>
                        <div className="space-y-1">
                            {MOCK_HISTORY.filter(h => h.dateLabel === 'Today').map(session => (
                                <button
                                    key={session.id}
                                    onClick={() => setActiveSessionId(session.id)}
                                    className={`w-full text-left flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${activeSessionId === session.id ? 'bg-white shadow-sm ring-1 ring-slate-200 text-indigo-600' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                                >
                                    <MessageSquare className="w-4 h-4 opacity-70" />
                                    <span className="truncate">{session.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">Yesterday</h4>
                        <div className="space-y-1">
                            {MOCK_HISTORY.filter(h => h.dateLabel === 'Yesterday').map(session => (
                                <button
                                    key={session.id}
                                    onClick={() => setActiveSessionId(session.id)}
                                    className={`w-full text-left flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${activeSessionId === session.id ? 'bg-white shadow-sm ring-1 ring-slate-200 text-indigo-600' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                                >
                                    <MessageSquare className="w-4 h-4 opacity-70" />
                                    <span className="truncate">{session.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/*Main Chat*/}
            <div className="flex-1 flex flex-col relative">

                {/*Model Selector Top Right*/}
                <div className="absolute top-4 right-6 z-10">
                    <div className="relative group">
                        <button className="flex items-center space-x-2 bg-white border border-slate-200 hover:border-indigo-300 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition-all">
                            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                            <span>{model === 'gpt-4o' ? 'GPT-4o (Smart)' : 'GPT-3.5 (Fast)'}</span>
                            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                        </button>
                    </div>
                </div>
            </div>



        </div>

    )
}

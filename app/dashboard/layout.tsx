'use client'

import { Sidebar } from "@/components/Sidebar";
import React, { useState, useEffect } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return <div className="ming-h-screen bg-slate-500"></div>
    }

    return (
        <div className="flex min-h-screen bg-slate-500 font-sans text-slate-900">
            <Sidebar />
            <main className="flex-1 ml-64 flex flex-col min-h-screen">
                {children}
            </main>
        </div >
    )
}

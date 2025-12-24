import { Tab } from "@/types/types";
import { Database, Hexagon, LayoutDashboard, LogOut, MessageSquareText, Settings, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
    activeTab?: Tab;
    setActiveTab?: (tab: Tab) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
    //TODO AUTH
    //const {user} = userAuthStore()
    const pathname = usePathname()

    const menuItems = [
        { href: '/dashboard', icon: LayoutDashboard, label: Tab.OVERVIEW, exact: true },
        { href: '/dashboard/documents', icon: Database, label: Tab.KNOWLEDGE_BASE },
        { href: '/dashboard/chat', icon: MessageSquareText, label: Tab.CHAT },
        { href: '/dashboard/settings', icon: Settings, label: Tab.SETTINGS },
    ];

    return (
        <div className="w-64 h-screen bg-slate-900 text-white flex flex-col fixed left-0 top-0 border-r border-slate-800 z-10">
            {/*Logo*/}

            <div className="h-16 flex items-center px-6 border-b border-slate-800">
                <div className="bg-indigo-600 p-1.5 rounded-lg mr-3">
                    <Hexagon className="w-5 h-5 text-white fill-current" />
                </div>
                <span className="text-lg font-bold tracking-tight">DataChat AI</span>
            </div>

            {/*Navigation*/}
            <nav className="flex-1 py-6 px-3 space-y-1">
                {menuItems.map((item) => {
                    const isActive = item.exact ? pathname === item.href : pathname?.startsWith(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-am font-medium transition-all duration-200 group
                      ${isActive
                                    ? 'bg-white/10 text-white shadow-am border-1-4 border-indigo-500'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <item.icon className={`w-5 h-5 ${isActive ? 'text-indigo-400' : 'text-slate-400 group-hover:text-white'}`} />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/*user profile*/}
            <div className="p-4 border-t border-slate-800 mt-auto">
                <div className="flex items-center w-full p-2 rounded-lg bg-white/5 mb-4">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                        <UserIcon className="w-5 h-5" />
                    </div>
                    <div className="ml-3 text-left flex-1 overflow-hidden">
                        {/* <p className="text-sm font-medium text-white truncate">{user?.name || 'Demo Admin'}</p> */}
                        {/* <p className="text-xs text-slate-400 truncate">{user?.email || 'admin@datachat.ai'}</p> */}
                    </div>
                </div>
                <Link
                    href="/"
                    className="flex items-center w-full p-2 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors group text-am font-medium">
                    <LogOut className="w-4 h-4 mr-3" />
                    Exit to Landing Page
                </Link>
            </div>

        </div>
    )
}

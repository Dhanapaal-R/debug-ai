import { LayoutDashboard, Settings, Activity, Shield, Users } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="flex h-screen bg-gray-950 text-gray-100 font-sans selection:bg-indigo-500/30">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 border-r border-white/10 flex flex-col">
                <div className="p-6 border-b border-white/10">
                    <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent flex items-center gap-2">
                        <Activity className="w-6 h-6 text-indigo-400" />
                        Debug AI
                    </h1>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 bg-indigo-500/10 text-indigo-400 rounded-xl font-medium border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-gray-200 rounded-xl font-medium transition-all">
                        <Shield className="w-5 h-5" />
                        Security
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-gray-200 rounded-xl font-medium transition-all">
                        <Settings className="w-5 h-5" />
                        Settings
                    </a>
                </nav>
                <div className="p-4 border-t border-white/10 bg-black/20">
                    <div className="flex items-center gap-3 px-4 py-2">
                        <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 font-bold ring-1 ring-indigo-500/40">
                            DA
                        </div>
                        <div className="text-sm">
                            <p className="font-medium text-gray-200">Dev Admin</p>
                            <p className="text-gray-500 text-xs">admin@debug-ai.dev</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-96 bg-indigo-900/10 blur-[100px] pointer-events-none"></div>

                <header className="h-16 border-b border-white/5 bg-gray-900/50 backdrop-blur-md flex items-center justify-between px-8 z-10">
                    <h2 className="text-lg font-semibold text-gray-200 flex items-center gap-2">
                        Dashboard
                        <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono border border-indigo-500/20">BETA</span>
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            System Operational
                        </div>
                    </div>
                </header>
                <div className="flex-1 overflow-hidden p-8 relative z-0">
                    {children}
                </div>
            </main>
        </div>
    );
}

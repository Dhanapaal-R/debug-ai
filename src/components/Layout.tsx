import { LayoutDashboard, Settings } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="flex h-screen bg-gray-50 text-gray-900 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
                <div className="p-6 border-b border-gray-200">
                    <h1 className="text-xl font-bold text-indigo-600 flex items-center gap-2">
                        <LayoutDashboard className="w-6 h-6" />
                        Debug AI
                    </h1>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 bg-indigo-50 text-indigo-700 rounded-lg font-medium">
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg font-medium transition-colors">
                        <Settings className="w-5 h-5" />
                        Settings
                    </a>
                </nav>
                <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center gap-3 px-4 py-2">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                            U
                        </div>
                        <div className="text-sm">
                            <p className="font-medium">User</p>
                            <p className="text-gray-500 text-xs">user@example.com</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
                    <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
                    <div className="flex items-center gap-4">
                        {/* Header actions if any */}
                    </div>
                </header>
                <div className="flex-1 overflow-auto p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}

import { Terminal } from 'lucide-react';

export function EmptyState() {
    return (
        <div className="h-full flex flex-col items-center justify-center text-gray-400 p-8 text-center animate-fade-in">
            <div className="bg-white/5 p-4 rounded-full mb-4 ring-1 ring-white/10">
                <Terminal className="w-8 h-8 opacity-50" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Ready to Analyze</h3>
            <p className="text-sm max-w-xs mx-auto text-gray-500">
                Paste your error logs or describe the issue on the left to start the investigation.
            </p>
        </div>
    );
}

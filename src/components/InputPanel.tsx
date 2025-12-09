import { Paperclip, Play, Sparkles } from 'lucide-react';

interface InputPanelProps {
    query: string;
    setQuery: (query: string) => void;
    onAnalyze: () => void;
    isAnalyzing: boolean;
}

export function InputPanel({ query, setQuery, onAnalyze, isAnalyzing }: InputPanelProps) {
    return (
        <div className="flex flex-col h-full bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            <div className="p-4 border-b border-white/10 bg-black/20 flex items-center justify-between">
                <h3 className="font-semibold text-gray-200 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    Input Query
                </h3>
                <span className="text-xs font-mono text-gray-500">v0.1.0</span>
            </div>

            <div className="flex-1 p-6 flex flex-col gap-6">
                <div className="flex-1 flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Describe the issue</label>
                    <textarea
                        className="flex-1 w-full p-4 rounded-xl bg-black/20 border border-white/10 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 resize-none text-gray-200 placeholder-gray-600 transition-all font-mono text-sm leading-relaxed"
                        placeholder="Paste error logs, describe the problem, or ask a question..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        spellCheck={false}
                    />
                </div>

                <div className="h-32 border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center text-gray-500 hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer group">
                    <div className="p-3 bg-white/5 rounded-full mb-3 group-hover:scale-110 transition-transform">
                        <Paperclip className="w-5 h-5 group-hover:text-indigo-400 transition-colors" />
                    </div>
                    <span className="text-sm">Drag & drop screenshots or logs</span>
                </div>
            </div>

            <div className="p-4 border-t border-white/10 bg-black/20 flex justify-end">
                <button
                    onClick={onAnalyze}
                    disabled={!query.trim() || isAnalyzing}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all transform active:scale-95 ${!query.trim() || isAnalyzing
                        ? 'bg-gray-800 cursor-not-allowed text-gray-500'
                        : 'bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20'
                        }`}
                >
                    <Play className={`w-4 h-4 fill-current ${isAnalyzing ? 'animate-pulse' : ''}`} />
                    {isAnalyzing ? 'Analyzing...' : 'Analyze Issue'}
                </button>
            </div>
        </div>
    );
}

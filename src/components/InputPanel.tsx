import { Paperclip, Play } from 'lucide-react';

interface InputPanelProps {
    query: string;
    setQuery: (query: string) => void;
    onAnalyze: () => void;
    isAnalyzing: boolean;
}

export function InputPanel({ query, setQuery, onAnalyze, isAnalyzing }: InputPanelProps) {
    return (
        <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
                <h3 className="font-semibold text-gray-700">Input Query</h3>
            </div>

            <div className="flex-1 p-6 flex flex-col gap-6">
                <div className="flex-1 flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-600">Describe the issue</label>
                    <textarea
                        className="flex-1 w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-gray-800 placeholder-gray-400"
                        placeholder="Paste error logs, describe the problem, or ask a question..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                <div className="h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">
                    <Paperclip className="w-6 h-6 mb-2" />
                    <span className="text-sm">Drag & drop screenshots or logs</span>
                </div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
                <button
                    onClick={onAnalyze}
                    disabled={!query.trim() || isAnalyzing}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all ${!query.trim() || isAnalyzing
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg'
                        }`}
                >
                    <Play className="w-4 h-4 fill-current" />
                    {isAnalyzing ? 'Analyzing...' : 'Analyze Issue'}
                </button>
            </div>
        </div>
    );
}

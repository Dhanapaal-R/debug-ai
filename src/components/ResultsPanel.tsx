import { CheckCircle, AlertCircle, Search, FileText, ArrowRight } from 'lucide-react';

export type ResultState = 'idle' | 'review' | 'solutions';

interface ResultsPanelProps {
    state: ResultState;
    issueType: string;
    onConfirm: () => void;
    solutions: string[];
}

export function ResultsPanel({ state, issueType, onConfirm, solutions }: ResultsPanelProps) {
    if (state === 'idle') {
        return (
            <div className="h-full bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center text-gray-400 p-8 text-center">
                <Search className="w-16 h-16 mb-4 opacity-20" />
                <p className="text-lg font-medium">Ready to analyze</p>
                <p className="text-sm">Submit a query to identify issues and find solutions.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
                <h3 className="font-semibold text-gray-700">Analysis Results</h3>
            </div>

            <div className="flex-1 p-6 overflow-auto">
                {/* Classification Section */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                        <h4 className="text-lg font-medium text-gray-800">Issue Classification</h4>
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-blue-600 font-medium mb-1">Detected Issue Type</p>
                            <p className="text-xl font-bold text-blue-900">{issueType}</p>
                        </div>
                        {state === 'review' && (
                            <button
                                onClick={onConfirm}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                            >
                                <CheckCircle className="w-4 h-4" />
                                Confirm
                            </button>
                        )}
                        {state === 'solutions' && (
                            <div className="flex items-center gap-2 text-green-600 font-medium bg-white px-3 py-1 rounded-full shadow-sm">
                                <CheckCircle className="w-4 h-4" />
                                Confirmed
                            </div>
                        )}
                    </div>
                </div>

                {/* Solutions Section */}
                {state === 'solutions' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">2</div>
                            <h4 className="text-lg font-medium text-gray-800">Recommended Solutions</h4>
                        </div>

                        {solutions.length > 0 ? (
                            <div className="space-y-4">
                                {solutions.map((sol, idx) => (
                                    <div key={idx} className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer group">
                                        <div className="flex items-start gap-3">
                                            <FileText className="w-5 h-5 text-indigo-500 mt-1" />
                                            <div>
                                                <h5 className="font-medium text-gray-900 group-hover:text-indigo-700">{sol}</h5>
                                                <p className="text-sm text-gray-500 mt-1">Relevance Score: 98%</p>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-indigo-500" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-orange-50 border border-orange-100 rounded-lg p-6 text-center">
                                <AlertCircle className="w-10 h-10 text-orange-400 mx-auto mb-3" />
                                <h5 className="font-medium text-orange-900 mb-2">No direct solutions found</h5>
                                <p className="text-sm text-orange-700 mb-4">We recommend collecting detailed logs for further analysis.</p>
                                <button className="px-4 py-2 bg-white border border-orange-200 text-orange-700 rounded-lg hover:bg-orange-100 font-medium text-sm">
                                    Fetch & Analyze Logs
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

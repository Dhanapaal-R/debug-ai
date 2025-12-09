import { Server, AlertCircle, ArrowRight } from 'lucide-react';

export function ManualAnalysisForm() {
    return (
        <div className="h-full flex flex-col p-6 animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                <h2 className="text-lg font-semibold text-white">No Direct Match Found</h2>
            </div>

            <p className="text-sm text-gray-400 mb-8">
                We couldn't find an exact match in the knowledge base. Please provide more details to start a deep diagnostic scan.
            </p>

            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Target Server
                    </label>
                    <div className="relative">
                        <Server className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                        <select className="w-full bg-black/20 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 appearance-none cursor-pointer hover:border-white/20 transition-colors">
                            <option>Select a server...</option>
                            <option>production-api-01</option>
                            <option>production-db-01</option>
                            <option>staging-cluster-alpha</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Issue Category
                    </label>
                    <div className="relative">
                        <AlertCircle className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                        <select className="w-full bg-black/20 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 appearance-none cursor-pointer hover:border-white/20 transition-colors">
                            <option>Select category...</option>
                            <option>Connection Timeout</option>
                            <option>High Latency</option>
                            <option>5xx Error Rate</option>
                            <option>Resource Exhaustion</option>
                        </select>
                    </div>
                </div>

                <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
                    Start Deep Analysis
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

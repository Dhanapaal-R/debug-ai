import { CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

interface Solution {
    id: string;
    title: string;
    matchScore: number;
    description: string;
}

interface SolutionsListProps {
    solutions: Solution[];
}

export function SolutionsList({ solutions }: SolutionsListProps) {
    return (
        <div className="h-full flex flex-col p-6 animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <h2 className="text-lg font-semibold text-white">Known Solutions Found</h2>
                <span className="ml-auto text-xs font-mono bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded">
                    VECTOR DB MATCH
                </span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                {solutions.map((solution) => (
                    <div
                        key={solution.id}
                        className="group bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl p-4 transition-all cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-medium text-gray-200 group-hover:text-emerald-400 transition-colors">
                                {solution.title}
                            </h3>
                            <div className="flex items-center gap-1 text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                {solution.matchScore}% Match
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                            {solution.description}
                        </p>
                        <div className="flex items-center text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            Verified Fix
                            <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

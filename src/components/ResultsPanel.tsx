import { EmptyState } from './EmptyState';
import { SolutionsList } from './SolutionsList';
import { ManualAnalysisForm } from './ManualAnalysisForm';

interface ResultsPanelProps {
    status: 'idle' | 'analyzing' | 'solutions_found' | 'no_match';
    solutions?: Array<{
        id: string;
        title: string;
        matchScore: number;
        description: string;
    }>;
}

export function ResultsPanel({ status, solutions = [] }: ResultsPanelProps) {
    if (status === 'idle') {
        return <EmptyState />;
    }

    if (status === 'analyzing') {
        return (
            <div className="h-full flex items-center justify-center animate-fade-in">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm text-gray-400 animate-pulse">Scanning vector database...</p>
                </div>
            </div>
        );
    }

    if (status === 'solutions_found') {
        return <SolutionsList solutions={solutions} />;
    }

    if (status === 'no_match') {
        return <ManualAnalysisForm />;
    }

    return null;
}

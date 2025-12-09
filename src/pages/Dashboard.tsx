import { useState } from 'react';
import { InputPanel } from '../components/InputPanel';
import { ResultsPanel } from '../components/ResultsPanel';

type DashboardStatus = 'idle' | 'analyzing' | 'solutions_found' | 'no_match';

const MOCK_SOLUTIONS = [
    {
        id: '1',
        title: 'Restart Nginx Service',
        matchScore: 92,
        description: 'The error logs indicate a Worker process crash which is often resolved by a clean restart.',
    },
    {
        id: '2',
        title: 'Clear Redis Cache',
        matchScore: 85,
        description: 'High latency and timeout errors may suggest cache fragmentation.',
    },
];

export function Dashboard() {
    const [query, setQuery] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [status, setStatus] = useState<DashboardStatus>('idle');

    const handleAnalyze = () => {
        if (!query.trim()) return;

        setIsAnalyzing(true);
        setStatus('analyzing');

        // Simulate API delay
        setTimeout(() => {
            setIsAnalyzing(false);

            // Simple logic for demo: if query contains "unknown" or "error", show no match
            // Otherwise show a mock match
            if (query.toLowerCase().includes('unknown')) {
                setStatus('no_match');
            } else {
                setStatus('solutions_found');
            }
        }, 2000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full p-6">
            <InputPanel
                query={query}
                setQuery={setQuery}
                onAnalyze={handleAnalyze}
                isAnalyzing={isAnalyzing}
            />
            <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <ResultsPanel
                    status={status}
                    solutions={status === 'solutions_found' ? MOCK_SOLUTIONS : []}
                />
            </div>
        </div>
    );
}

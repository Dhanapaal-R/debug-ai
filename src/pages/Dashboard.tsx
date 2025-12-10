import { useState } from 'react';
import { InputPanel } from '../components/InputPanel';
import { ResultsPanel } from '../components/ResultsPanel';

type DashboardStatus = 'idle' | 'analyzing' | 'solutions_found' | 'no_match';

export function Dashboard() {
    const [query, setQuery] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [status, setStatus] = useState<DashboardStatus>('idle');
    const [solutions, setSolutions] = useState<any[]>([]);

    const handleAnalyze = async () => {
        if (!query.trim()) return;

        setIsAnalyzing(true);
        setStatus('analyzing');
        setSolutions([]);

        try {
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query }),
            });

            if (!response.ok) throw new Error('Analysis failed');

            const data = await response.json();

            if (data.matches && data.matches.length > 0) {
                setSolutions(data.matches);
                setStatus('solutions_found');
            } else {
                setStatus('no_match');
            }
        } catch (error) {
            console.error('Analysis error:', error);
            setStatus('no_match'); // Fallback to manual for now
        } finally {
            setIsAnalyzing(false);
        }
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
                    solutions={solutions}
                />
            </div>
        </div>
    );
}

import { useState } from 'react';
import { InputPanel } from '../components/InputPanel';
import { ResultsPanel } from '../components/ResultsPanel';
import type { ResultState } from '../components/ResultsPanel';

export function Dashboard() {
    const [query, setQuery] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [resultState, setResultState] = useState<ResultState>('idle');
    const [issueType, setIssueType] = useState('');
    const [solutions, setSolutions] = useState<string[]>([]);

    const handleAnalyze = () => {
        setIsAnalyzing(true);
        // Mock API call
        setTimeout(() => {
            setIsAnalyzing(false);
            setIssueType('FTP Connection Timeout');
            setResultState('review');
        }, 1500);
    };

    const handleConfirm = () => {
        setResultState('solutions');
        // Mock solutions fetch
        setSolutions([
            'Check firewall rules for port 21',
            'Verify FTP credentials in configuration',
            'Restart FTP service on the server'
        ]);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            <InputPanel
                query={query}
                setQuery={setQuery}
                onAnalyze={handleAnalyze}
                isAnalyzing={isAnalyzing}
            />
            <ResultsPanel
                state={resultState}
                issueType={issueType}
                onConfirm={handleConfirm}
                solutions={solutions}
            />
        </div>
    );
}

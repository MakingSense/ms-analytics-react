/* eslint-disable no-console */
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from './common/Container';

export const App: React.FC = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Container />
            </Router>
        </QueryClientProvider>
    );
};

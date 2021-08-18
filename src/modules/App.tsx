import React from 'react';
import firebase from 'firebase/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from './common/Container';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: 'AIzaSyAICp_WrQ2cYBsKsxe63a-4j3B0ZjZxs08',
    authDomain: 'ms-analytics-poc.firebaseapp.com',
    projectId: 'ms-analytics-poc',
    storageBucket: 'ms-analytics-poc.appspot.com',
    messagingSenderId: '890793208402',
    appId: '1:890793208402:web:b42c3c46175a271f5bcd8b',
    measurementId: 'G-8KZK7S40KJ',
};
firebase.initializeApp(firebaseConfig);
export const App: React.FC = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Router forceRefresh>
                <Container />
            </Router>
        </QueryClientProvider>
    );
};

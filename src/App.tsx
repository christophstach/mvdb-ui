import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import Layout from './common/components/layout/Layout';
import { QueryClient, QueryClientProvider, } from 'react-query'
import "./App.scss";

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

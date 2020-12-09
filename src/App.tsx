import * as React from "react"
import { BrowserRouter } from "react-router-dom"
import Layout from './common/components/Layout';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';

const queryCache = new QueryCache();

export function App() {
    return (
        <ReactQueryCacheProvider queryCache={queryCache}>
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </ReactQueryCacheProvider>
    );
}

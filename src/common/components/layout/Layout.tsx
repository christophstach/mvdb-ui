
import * as React from 'react';
import Routes from '../routes/Routes';
import MainNavigation from '../main-navigation/MainNavigation';
import "./Layout.scss"

export default function Layout() {
    return (
        <div className="layout">
            <MainNavigation />

            <div className="layout-header" />

            <div className="layout-body">
                <Routes />
            </div>
        </div>
    );
}

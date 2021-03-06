
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import MoviesMain from '../../../movies/pages/movies-main/MoviesMain';
import MoviesSingle from '../../../movies/pages/movies-single/MoviesSingle';
import WishlistMain from '../../../wishlist/pages/wishlist-main/WishlistMain';
import LoginSuccess from '../../../auth/pages/auth/login-success/LoginSuccess';
import Logout from '../../../auth/pages/auth/logout/Logout';
import LoginFailure from '../../../auth/pages/auth/login-failure/LoginFailure';

export default function Routes () {
    return (
        <Switch>
            <Route exact path="/">
                <MoviesMain />
            </Route>
            <Route path="/movies/:movieId">
                <MoviesSingle />
            </Route>
            <Route path="/wishlist">
                <WishlistMain />
            </Route>
            <Route path="/auth/login/success/:token">
                <LoginSuccess />
            </Route>
            <Route path="/auth/login/failure">
                <LoginFailure />
            </Route>
            <Route path="/auth/logout">
                <Logout />
            </Route>
        </Switch>
    )
}

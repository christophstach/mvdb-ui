
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import MoviesMain from '../../movies/pages/movies-main/MoviesMain';
import MoviesSingle from '../../movies/pages/movies-single/MoviesSingle';
import WishlistMain from '../../wishlist/pages/wishlist-main/WishlistMain';

export default function Routes () {
    return (
        <Switch>
            <Route exact path="/">
                <MoviesMain />
            </Route>
            <Route path="/movies/:id">
                <MoviesSingle />
            </Route>
            <Route path="/wishlist">
                <WishlistMain />
            </Route>
        </Switch>
    )
}

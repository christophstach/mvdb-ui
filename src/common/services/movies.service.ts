import { useQuery } from 'react-query';
import Movie from '../models/Movie';
import { getMovies } from '../apis/MoviesDictionary';


export default function useMoviesService() {
    const manyQuery = useQuery<Movie[]>('movies', getMovies);

    return {
        manyQuery
    }
}

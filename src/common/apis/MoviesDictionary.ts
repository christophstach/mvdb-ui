import axios from 'axios';
import Movie from '../models/Movie';
import config from '../../config/default';

const endpoint = config.moviesDictionaryApiEndpoint;

export async function getMovies() {
    return await axios.get<Movie[]>(`${endpoint}`).then(response => response.data);
}

export async function getMovie(id: string) {
    return await axios.get<Movie>(`${endpoint}/${id}`).then(response => response.data);
}

export async function postMovie(movie: Partial<Movie>) {
    return await axios.post<Movie>(`${endpoint}`, movie).then(response => response.data);
}

export async function putMovie(id: string, movie: Partial<Movie>) {
    return await axios.put<Movie>(`${endpoint}/${id}`, movie).then(response => response.data);
}

export async function deleteMovie(id: string) {
    return await axios.delete<Movie>(`${endpoint}/${id}`).then(response => response.data);
}

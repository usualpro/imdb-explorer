import { imdbServices } from '../services';
import { makeAutoObservable } from 'mobx'

class Movies {
    _Top250Movies = [];
    _Top250TVs = [];

    constructor() {
        makeAutoObservable(this);
        this.fetchAllMovies();
    }

    fetchAllMovies() {
        const requests = [
            imdbServices.Top250Movies(),
            imdbServices.Top250TVs()
        ];
        Promise.all(requests).then(results => {
            this.Top250Movies = results[0].data;
            this.Top250TVs = results[1].data;
        });
    }

    set Top250Movies(movies) {
        this._Top250Movies = movies;
    }

    set Top250TVs(movies) {
        this._Top250TVs = movies;
    }

    get Top250Movies() {
        return this._Top250Movies;
    }

    get Top250TVs() {
        return this._Top250TVs;
    }
}

export default new Movies();
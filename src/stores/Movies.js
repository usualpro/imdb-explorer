import { imdbServices } from '../services';
import { makeAutoObservable } from 'mobx'

class Movies {
    _Top250Movies = { items: [] };
    _Top250TVs = { items: [] };
    _myStorage = window.localStorage;
    constructor() {
        makeAutoObservable(this);
        this.getDataOnLineOrUseLocalStorage();
    }

    getDataOnLineOrUseLocalStorage() {
        const hadLocalStorageData = (
            this._myStorage.getItem('Top250Movies') !== null
            && this._myStorage.getItem('Top250TVs') !== null
        )
        if (hadLocalStorageData === false) {
            this.fetchAllMovies();
        } else {
            this.Top250Movies = JSON.parse(this._myStorage.getItem("Top250Movies"));
            this.Top250TVs = JSON.parse(this._myStorage.getItem("Top250TVs"));
        }
    }

    fetchAllMovies() {
        const requests = [
            imdbServices.Top250Movies(),
            imdbServices.Top250TVs()
        ];
        Promise.all(requests).then(results => {
            this.Top250Movies = results[0].data;
            this.Top250TVs = results[1].data;
            this._myStorage.setItem('Top250Movies', JSON.stringify(this.Top250Movies));
            this._myStorage.setItem('Top250TVs', JSON.stringify(this.Top250TVs));
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
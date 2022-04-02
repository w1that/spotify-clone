import { action, makeObservable, observable } from "mobx";

export class GenreStore {
  genres = null;
  selectedGenre = null; //default user is not logged in.

  constructor() {
    makeObservable(this, {
      genres: observable,
      selectedGenre: observable,
      setGenre: action,
      setGenres: action,
    });
  }

  setGenre(genre) {
    this.selectedGenre = genre;
  }

  setGenres(genres) {
    this.genres = genres;
  }
}

const genreStore = new GenreStore();
export default genreStore;

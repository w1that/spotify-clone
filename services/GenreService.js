import axios from "axios";

class GenreService {
  async getGenres() {
    const response = await axios.get(`http://localhost:3000/api/genres`);
    return response;
  }

  getGenreById(id, setLoading) {
    axios
      .get(`http://localhost:3000/api/genres/${id}`)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }
}

const genreService = new GenreService();
export default genreService;

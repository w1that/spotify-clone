import axios from "axios";

class GenreService {
  async getGenres() {
    const response = await axios.get(`https://spotify-clone-nu-ten.vercel.app/api/genres`);
    return response;
  }

  getGenreById(id, setLoading) {
    axios
      .get(`https://spotify-clone-nu-ten.vercel.app/api/genres/${id}`)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }
}

const genreService = new GenreService();
export default genreService;

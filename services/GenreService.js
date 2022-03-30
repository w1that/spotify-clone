import axios from "axios";

class GenreService {
  async getGenres(){
    const response = await axios.get("http://localhost:3000/api/genres");
    return response;
  };

  async getGenreById(id) {
    const response = await axios.get(`http://localhost:3000/api/genres/${id}`);
    return response;
  }
}

const genreService = new GenreService();
export default genreService;

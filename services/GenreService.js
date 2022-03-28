import axios from 'axios'

class GenreService{

    getGenres=async()=>{
            const response = await axios.get("http://localhost:3000/api/genres")
            return response
    }
}

const genreService = new GenreService();
export default genreService
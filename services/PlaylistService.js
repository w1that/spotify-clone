import axios from "axios";

class PlaylistService{

    getPlaylistById(id){
        return axios.get(`http://localhost:3000/api/playlists/${id}`)
    }
}

const playlistService = new PlaylistService();
export default playlistService;
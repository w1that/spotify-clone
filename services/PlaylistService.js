import axios from "axios";

class PlaylistService{

    getPlaylistById(id, setPlaylist, setLoading){
        axios
      .get(`https://spotify-clone-nu-ten.vercel.app/api/playlists/${id}`)
      .then((res) => {
        setPlaylist(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    }

    
}

const playlistService = new PlaylistService();
export default playlistService;
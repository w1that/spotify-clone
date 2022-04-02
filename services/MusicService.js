import axios from "axios";

class MusicService{
    getMusicById(musicId, setMusics){
        axios
        .get(`https://spotify-clone-nu-ten.vercel.app/api/musics/${musicId}`)
        .then((res) => setMusics((prev) => [...prev, res.data.data]))
        .catch(err=>console.log(err));
    }
}

const musicService = new MusicService();
export default musicService;
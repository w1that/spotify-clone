import axios from "axios";

class MusicService{
    getMusicById(musicId, setMusics){
        axios
        .get(`http://localhost:3000/api/musics/${musicId}`)
        .then((res) => setMusics((prev) => [...prev, res.data.data]))
        .catch(err=>console.log(err));
    }
}

const musicService = new MusicService();
export default musicService;
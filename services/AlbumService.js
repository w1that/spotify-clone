import axios from "axios";

class AlbumService{
    getAlbumById(albumId, setAlbum, setLoading){
        axios.get(`http://localhost:3000/api/albums/${albumId}`)
    .then(res=>{
        setAlbum(res.data.data);
        setLoading(false);
    })
    .catch((err) => console.log(err));
    }
}

const albumService = new AlbumService();
export default albumService;
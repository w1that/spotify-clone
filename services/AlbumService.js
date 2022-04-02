import axios from "axios";

class AlbumService{
    getAlbumById(albumId, setAlbum, setLoading){
        axios.get(`https://spotify-clone-nu-ten.vercel.app/api/albums/${albumId}`)
    .then(res=>{
        setAlbum(res.data.data);
        setLoading(false);
    })
    .catch((err) => console.log(err));
    }
}

const albumService = new AlbumService();
export default albumService;
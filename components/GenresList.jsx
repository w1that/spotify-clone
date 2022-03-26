import React, {useState} from 'react'

export default function GenresList() {

  const [genres, setGenres] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/genres')
    .then(res=>setGenres(res.data.data))
    .catch(err=>console.log(err));
  }, [])

  return (
    <div>
      
    </div>
  )
}

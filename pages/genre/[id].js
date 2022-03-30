import axios from 'axios';
import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'react'
import AppLayout from '../../components/AppLayout';

export default function GenrePage() {

  const [genre, setGenre] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;


  useEffect(() => {
    axios.get(`http://localhost:3000/api/genres/${id}`)
    .then(res=> {
      setGenre(res.data.data);
      setLoading(false);
    }); 
  }, [])

  if(loading){
    return <></>
  }
  
  return (
    <div>
        <AppLayout page={'genre'}  />
        </div>
  )
}


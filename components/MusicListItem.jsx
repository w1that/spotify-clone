import { Col, Row } from "antd";
import axios from "axios";
import React, {useState, useEffect} from "react";
import Image from 'next/image'

export default function MusicListItem({ music, id }) {
  
    const [album, setAlbum] = useState({});
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/albums/${music.albumId}`)
    .then(res=>{
        setAlbum(res.data.data);
        setLoading(false);
    });
  }, [])


  if(loading){
      return <></>
  }
  

    return (
    <Row className={`mt-${id===0?'6':'0'} px-5 hover:bg-light-gray duration-75 flex items-center p-2 rounded-md`}>
      <Col span={1}>
        {" "}
        <h4 className="text-lighest-gray font-gotham  flex-none m-0">{id + 1}</h4>
      </Col>
      <Col span={8}>
        <div className="flex items-center justify-start">
            <Image src={music.coverImage} width={40} height={40} alt='music cover' />
            <div className="ml-3">
            <h4 className="text-white font-gotham font-normal m-0">{music.name}</h4>
            
            <h4 onClick={()=>alert('artists')} className="text-white font-gotham font-normal m-0 cursor-pointer hover:underline">{music.artists[0]}</h4>
            
            </div>
        </div>
      </Col>
      <Col span={6}>
        {" "}
        <h4 onClick={()=>alert('artists')} className="text-lighest-gray font-gotham m-0 cursor-pointer hover:underline">{album.name}</h4>
      </Col>
      <Col span={6}>
        <h4 className="text-lighest-gray font-gotham m-0">{music.year}</h4>
      </Col>
      <Col span={3}>
        <h4 className="text-lighest-gray font-gotham  m-0 ">{music.duration}</h4>
      </Col>
    </Row>
  );
}

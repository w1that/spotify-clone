import React, { useState, useEffect } from "react";
import { GrPlayFill } from "react-icons/gr";
import { FiHeart } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Col, List, Row } from "antd";
import axios from "axios";
import MusicListItem from "./MusicListItem";

export default function MusicFlowField({ playlist }) {
  const [musics, setMusics] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    playlist.musics.map((musicId) => {
      axios
        .get(`http://localhost:3000/api/musics/${musicId}`)
        .then((res) => setMusics((prev) => [...prev, res.data.data]));
      if (playlist.musics.indexOf(musicId) === playlist.musics.length - 1) {
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <div
      className="min-h-screen p-10"
      style={{
        background:
          "linear-gradient(0deg, rgba(18,18,18,1) 67%, rgba(76,76,76,1) 99%)",
      }}
    >
      <div className="flex align-middle">
        <button className="w-14 h-14 rounded-full flex justify-center items-center drop-shadow-lg shadow-black bg-spotify-green">
          <GrPlayFill className="ml-2" size={22} />
        </button>
        <button className="rounded-full flex justify-center items-center drop-shadow-lg shadow-black  cursor-default ml-4">
          <FiHeart
            className="ml-2 text-gray-400 hover:text-white duration-200"
            size={36}
          />
        </button>
        <button className="rounded-full flex justify-center items-center drop-shadow-lg shadow-black cursor-default ml-4">
          <BsThreeDots
            className="ml-2 text-gray-400 hover:text-white duration-200 "
            size={30}
          />
        </button>
      </div>

      <div className="mt-5">
        <List
          size="small"
          header={
            <Row className="px-5">
              <Col span={1}>
                {" "}
                <h4 className="text-lighest-gray font-gotham flex-none">#</h4>
              </Col>
              <Col span={8}>
                <h4 className="text-lighest-gray font-gotham ">BASLIK</h4>
              </Col>
              <Col span={6}>
                {" "}
                <h4 className="text-lighest-gray font-gotham">ALBUM</h4>
              </Col>
              <Col span={6}>
                <h4 className="text-lighest-gray font-gotham">TARIH</h4>
              </Col>
              <Col span={3}>
                <h4 className="text-lighest-gray font-gotham  ">
                  <AiOutlineClockCircle size={20} color="gray" />
                </h4>
              </Col>
            </Row>
          }
          dataSource={musics}
          renderItem={(item) => (
              <MusicListItem music={item} id={musics.indexOf(item)} />
          )}
        />
      </div>
    </div>
  );
}

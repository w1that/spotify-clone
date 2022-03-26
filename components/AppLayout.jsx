/* eslint-disable react/no-unescaped-entities */
import { Col, Row } from "antd";
import AlbumCover from "./AlbumCover";
import LeftMenu from "./LeftMenu";
import Navbar from "./Navbar";
import { useRouter } from "next/dist/client/router";

export default function AppLayout() {

  const pathName = useRouter().pathname

  return (
    <div>
      <Row className="min-h-screen w-full">
        <Col className="bg-black" span={4}>
          <LeftMenu  />
        </Col>
        <Col className="bg-medium-dark-gray relative" span={20}>
          <Navbar pathName = {pathName} />
        
          
        </Col>
      </Row>

    </div>
  );
}

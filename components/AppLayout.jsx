/* eslint-disable react/no-unescaped-entities */
import { Col, Row } from "antd";
import LeftMenu from "./LeftMenu";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <div>
      <Row className="min-h-screen w-full">
        <Col className="bg-black" span={4}>
          <LeftMenu />
        </Col>
        
        <Col className="bg-medium-dark-gray relative" span={20}>
          <Navbar />
        </Col>
      </Row>
    </div>
  );
}

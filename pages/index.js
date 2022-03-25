/* eslint-disable react/no-unescaped-entities */
import { Col, Row } from "antd";
import LeftMenu from "../components/LeftMenu";

export default function Home() {
  return (
    <div>
      <Row className="min-h-screen w-screen ">
        <Col className="bg-dark-gray h-screen" span={4}>
          <LeftMenu />
        </Col>
        <Col className="bg-gray-700 h-screen" span={20}>
          
        </Col>
      </Row>
      
    </div>
  );
}

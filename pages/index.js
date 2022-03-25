/* eslint-disable react/no-unescaped-entities */
import { Button, Col, Row } from "antd";
import LeftMenu from "../components/LeftMenu";
import Navbar from "../components/Navbar";
import menuItemStore, { MenuItemStore } from "../mobx/MenuItemStore";

export default function Home() {

  const store = new MenuItemStore()
  return (
    <div>
      <Row className="min-h-screen w-full">
        <Col className="bg-black" span={4}>
          <LeftMenu  />
        </Col>
        <Col className="bg-medium-dark-gray" span={20}>
          <Navbar/>
          <div className="h-screen bg-medium-dark-gray">

          </div>
          <div className="h-screen bg-medium-dark-gray">

          </div>
        </Col>
      </Row>

    </div>
  );
}

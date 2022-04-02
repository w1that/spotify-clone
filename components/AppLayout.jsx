/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import { observer } from "mobx-react";
import { useRouter } from "next/dist/client/router";
import LeftMenu from "./LeftMenu";
import Navbar from "./Navbar";
import userStore from "../mobx/UserStore";
import FlowField from "./FlowField";
import GridGenresList from "./GridGenresList";
import PlaylistFlow from "./PlaylistFlow";

export default function AppLayout({ page }) {
  const [className, setClassName] = useState("");
  const [style, setStyle] = useState("");

  //checks if a current user exists. then whether sets a style which prepares a linear gradient or provides a classname which
  //prepares a solid navigationbar and not a linear gradient
  useEffect(() => {
    if (userStore.currentUserId) {
      setStyle({
        background:
          "linear-gradient(0deg, rgba(18,18,18,1) 77%, rgba(33,17,94,1) 99%)",
        minHeight: "100vh",
      });
      setClassName("");
    } else {
      setStyle("");
      setClassName("bg-medium-dark-gray relative min-h-screen");
    }
  }, []);

  function handleRightSide() {
    switch (page) {
      case "main":
        return <FlowField />;
      case "genre":
        return <FlowField />;
      case "search":
        return <GridGenresList />;
      case "playlist":
        return <PlaylistFlow />;
      default:
        break;
    }
  }

  return (
    <div>
      <Row className="min-h-screen w-full">
        <Col className="bg-black fixed" span={4}>
          <LeftMenu />
        </Col>

        <Col style={style} className={className} span={20}>
          <Navbar />
          {handleRightSide()}
        </Col>
      </Row>
    </div>
  );
}

observer(AppLayout);

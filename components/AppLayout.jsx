/* eslint-disable react/no-unescaped-entities */
import React, {useState, useEffect} from 'react'
import { Col, Row } from "antd";
import { observer } from "mobx-react";
import LeftMenu from "./LeftMenu";
import Navbar from "./Navbar";
import userStore from "../mobx/UserStore";
import FlowField from './FlowField';

export default function AppLayout({}) {

  const [className, setClassName] = useState('')
  const [style, setStyle] = useState('')

  //checks if a current user exists. then whether sets a style which prepares a linear gradient or provides a classname which 
  //prepares a solid navigationbar and not a linear gradient
  useEffect(() => {
    if(userStore.currentUserId){
      setStyle({background:'linear-gradient(0deg, rgba(24,24,24,1) 77%, rgba(48,32,108,1) 100%)'});
      setClassName('');
    }else{
      setStyle('')
      setClassName('bg-medium-dark-gray relative')
    }
  }, [])


  return (
    <div>
      <Row className="min-h-screen w-full">
        <Col className="bg-black" span={4}>
          <LeftMenu />
        </Col>
        
        <Col style={style} className={className} span={20}>
      <Navbar/>
      <FlowField />
    </Col>
        
      </Row>
    </div>
  );
}

observer(AppLayout)
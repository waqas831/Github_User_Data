import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const CheckRecord = () => {
  const state = useLocation();
  const item = state;
  const follower_url = item.state.follower_url;
  console.log("gaaaaaaaaaaaa", item.state.follower_url);
  const [differentData, setDifferentData] = useState([]);

  const getData = async () => {
    const data = await axios.get(follower_url);
    setDifferentData(data.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Row>
        <Col>
          <Card style={{width:'50rem',alignContent:'center',alignItems:'center',textAlign:'center',margin:'0 auto'}}>
            <Card.Body  style={{alignContent:'center',alignItems:'center',textAlign:'center'}}>
                <h2 style={{paddingTop:'2%',paddingBottom:'2%',textAlign:'center',fontSize:21,color:'black'}}>All the followers List</h2>
                <Row>
              {differentData.map((item, index) => {
                  console.log('item',item)
                return (
                  <>
                  
                    <Col md={4} style={{paddingTop:'2%'}}>
                      <Card.Img src={item.avatar_url} style={{width:100,height:100,borderRadius:100}}  />
                    </Col>
                    <Col md={8} style={{paddingTop:'2%'}}>
                    <a href={item.repos_url} style={{borderRadius:'2px'}}>
                            <button> {item.login}</button>
                          </a>
                    </Col>
                    
                  </>
                );
              })}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CheckRecord;

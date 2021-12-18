import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import LoadingPage from "./LoadingPage";
import {useNavigate} from 'react-router-dom';
const CreateUserDesign = ({ user, loading }) => {
  const navigate=useNavigate();
  const gotodetail=()=>{
    console.log('welcome')
  }

  return (
    <Container>
      {console.log(user)}
      {loading ? <LoadingPage /> : ""}
      <Row>
        {user.map((user,index) => {
          return (
            <>
              <Col md={6} key={user.node_id} style={{paddingBottom:'3%'}}>
                <Card key={index} onClick={()=>navigate(`/${user.node_id}`,{state:{user}})}>
                  <Card.Body>
                    <Row>
                      <Col md={4}>
                        <Card.Img variant="top" src={user.avatar_url} style={{borderRadius:'100px'}} />
                      </Col>
                      <Col md={8}>
                        <Card.Title style={{color:'green',fontWeight:'bold',fontSize:23,background:'white',textAlign:'center',alignItems:'center'}}>{user.login}</Card.Title>
                        <Card.Text style={{color:'black',fontWeight:'bold',fontSize:22,background:'white',textAlign:'center',alignItems:'center'}} >{user.type}</Card.Text>
                        <Row>
                          <Col md={4} style={{fontSize:18,color:'black',background:'grey',textTransform:'capitalize',cursor:'pointer'}}>articles</Col>
                          <Col md={4} style={{fontSize:18,color:'white',background:'green',cursor:'pointer',textTransform:'capitalize'}}>followings</Col>
                          <Col md={4} style={{fontSize:18,color:'white',background:'blue',cursor:'pointer',textTransform:'capitalize'}}>followers</Col>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
  );
};

export default CreateUserDesign;

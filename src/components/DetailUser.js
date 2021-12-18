import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import LoadingPage from "./LoadingPage";
import { useNavigate } from "react-router-dom";

const DetailUser = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const item = state.user;
  const follower_url = item.followers_url;
  const following_url = item.following_url;
  const repositries = item.repos_url;
  const events = item.events_url;
  const [followers, setFollowers] = useState([]);
  const [reposs, setReposs] = useState([]);
  const [no_of, setNo_of] = useState(0);
  const [loading, setLoading] = useState(true);
  console.log(follower_url, following_url, repositries);

  const downloadfile = () => {
    console.log("download");
  };

  const getallinfo = async () => {
    const data1 = await axios.get(repositries);
    const data2 = await axios.get(follower_url);
    setNo_of(data2.data.length);
    console.log(data2);
    setReposs(data1.data);
    setLoading(false);
  };
  useEffect(() => {
    getallinfo();
  }, []);

  console.log(reposs);
  return (
    <>
      <Container>
        {loading ? <LoadingPage /> : ""}
        <Card>
          <Card.Body>
            <Row>
              <Col md={3}>
                <Card.Img
                  variant="top"
                  src={item.avatar_url}
                  style={{ borderRadius: "200px", width: 200, height: 200 }}
                />
              </Col>
              <Col
                style={{ alignItems: "center", alignContent: "center" }}
                md={8}
              >
                <Card.Title
                  style={{
                    color: "green",
                    fontWeight: "bold",
                    fontSize: 23,
                    textAlign: "center",
                    textTransform: "capitalize",
                  }}
                >
                  {item.login}
                </Card.Title>
                <Card.Title
                  style={{ color: "green", fontWeight: "bold", fontSize: 23 }}
                >
                  web developer
                </Card.Title>
                <Row>
                  <Col md={4} >
                    <span>Articles</span>
                    <span>&nbsp;38</span>
                  </Col>
                  <Col md={4} onClick={()=>navigate(`/followers`,{state:{follower_url}})}>
                    <span>Followers</span>
                    <span>&nbsp;{no_of}</span>
                  </Col>
                  <Col md={4}>
                    <span>Rating</span>
                    <span>&nbsp;31</span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <div style={{ paddingTop: "3%" }}>
                  <h2
                    style={{
                      textAlign: "center",
                      textTransform: "capitalize",
                      color: "black",
                      fontSize: 23,
                      paddingBottom: "4%",
                    }}
                  >
                    All The repositries of {item.login}
                  </h2>
                  {reposs.map((item, index) => {
                    return (
                      <>
                        <div style={{ paddingBottom: "4%" }}>
                          <span
                            style={{
                              color: "black",
                              fontSize: 23,
                              fontWeight: "bold",
                            }}
                          >
                            {item.full_name}
                          </span>
                          <div
                            style={{
                              color: "black",
                              fontSize: 20,
                              fontWeight: "medium",
                            }}
                          >
                            {item.description}
                          </div>
                          <h2>Language Used: {item.language}</h2>
                          <h3>
                            total watchers of that repository is:{" "}
                            {item.watchers}
                          </h3>
                          <a href={item.clone_url} download={"welcome"}>
                            <button onClick={downloadfile}> download</button>
                          </a>
                          <br></br>
                        </div>
                      </>
                    );
                  })}
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default DetailUser;

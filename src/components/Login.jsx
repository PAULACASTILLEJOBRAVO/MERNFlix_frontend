import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Row,
  Col,
  Container,
  // Alert,
  Card,
  CardTitle,
  CardText,
  Media,
} from "reactstrap";

import { jwtDecode } from "jwt-decode";


import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

import config from "../config";

import MyImgLogin from "../images/background_mernflixdark.png";

var imgStyle = {
  width: "100%",
  height: "100%",
};

export default function Login() {

  const navigate = useNavigate();

  const onSuccess = (res) => {
    ////////////////////////Lo que debería contener onSucess////////////////////////
    var email=jwtDecode(res.credential).email;
    var name=jwtDecode(res.credential).name;
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('name', name);
    navigate("/home");
  };

  const onError = () => {
    console.log("[Login Failed]");
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card
            inverse
            body
            className="text-center"
            style={{ backgroundColor: "#000", borderColor: "#000" }}
          >
            <CardTitle tag="h5">Welcome to MERNFlix</CardTitle>
            <CardText>React-based web project"</CardText>
            <CardText>
            <GoogleOAuthProvider clientId={config.clientID}>
              <GoogleLogin
                  auto_select
                  onSuccess={onSuccess}
                  onError={onError}
                  useOneTap
              />
            </GoogleOAuthProvider>
            </CardText>
            <Media style={imgStyle} object src={MyImgLogin} alt="Login" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

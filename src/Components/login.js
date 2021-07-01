import React, { Component } from "react";
import { Form, Input, message } from "antd";
import "./styles.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onFinish = (values) => {
    console.log("Success:", values);
    const {username,password}=values;
    const data=JSON.parse(localStorage.getItem('userDetails'))
    if(username===data.username && password===data.password){
        localStorage.setItem("token",Date.now())
        this.props.history.push("/dashboard");
    }else if(username!=data.username || password!=data.password){
        message.error('username/password is incorrect');

    }
  };
  componentDidMount(){
      let token=localStorage.getItem("token");
      if(token){
          this.props.history.push("/dashboard");
      }
  }

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    return (
      <div className="login-content ">
        <div className="imgcontainer">
          <img
            className="img"
            alt='avatar'
            src="https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png"
          />
        </div>

        <div class="container">
          <Form
            name="basic"
            wrapperCol={{
              span: 16,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              name="username"
              wrapperCol={{
                offset: 3,
                span: 16,
              }}
              rules={[
                {
                  required: true,
                  message: "Please enter your username!",
                },
              ]}
            >
              <Input placeholder="Enter Username" />
            </Form.Item>

            <Form.Item
              name="password"
              wrapperCol={{
                offset: 3,
                span: 16,
              }}
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
              ]}
            >
              <Input type="password" placeholder="Enter Password" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 3,
                span: 16,
              }}
            >
              <button type="submit">Login</button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;

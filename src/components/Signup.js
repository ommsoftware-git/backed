import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { Button, Form, Input } from "antd";

import "./Signup.css";
const Signup = () => {
  return (
    <>
      <div className="">
        <div className="signup-form">
          <div className="inner-form">
            <h3>Baked AI</h3>
            <p>
              Join Friends of Baked AI and receive a 15% commission on all
              payments for paying customers you refer to{" "}
              <span>
                <RouterLink to="/">www.baked-ai.com!</RouterLink>
              </span>
            </p>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="firstName"
                rules={[
                  { required: true, message: "Please input your firstName!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="First name"
                />
              </Form.Item>
              <Form.Item
                name="LastName"
                rules={[
                  { required: true, message: "Please input your LastName!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Last name"
                />
              </Form.Item>
              <Form.Item
                name="Email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  prefix={
                    <BsFillEnvelopeFill className="site-form-item-icon" />
                  }
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
                name="Confirm password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Confirm password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Confirm password"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className="login-form-button"
                >
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

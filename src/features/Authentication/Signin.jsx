import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

import backgroundImage from '../../assets/imgs/bg-authen.jpg';
import logo from '../../assets/imgs/fullLogo.png';
import { signInAction } from '../../redux/slice/authenticationSlice';
import { FORM_FIELDS, PLACEHOLDER_FORM, PUBLIC_ROUTE, VALIDATE_MESSAGE } from '../../constants';

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (values) => {
    dispatch(
      signInAction({
        username: values.username,
        password: values.password,
        remember: values.remember,
        navigate: navigate,
      })
    );
  };

  return (
    <div
      className="flex justify-end bg-cover w-screen min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="self-center mr-8 ml-8 w-full md:w-1/2 lg:w-1/3 bg-white/50 rounded-3xl shadow-lg p-6 backdrop-blur-sm text-center">
        {/* name page */}
        <div>
          <img src={logo} className="h-16 mx-auto" alt="" />

          <h4 className="text-sm font-bold mt-4">Sign in to your account</h4>
        </div>
        {/* form */}
        <div className="flex mt-4">
          <Form
            className="login-form flex flex-col w-full relative"
            name="normal_login"
            initialValues={{
              remember: false,
            }}
            onFinish={handleLogin}
          >
            <Form.Item
              name={FORM_FIELDS.USERNAME}
              rules={[
                {
                  required: true,
                  message: VALIDATE_MESSAGE.USERNAME_REQUIRED,
                },
                {
                  min: 8,
                  message: VALIDATE_MESSAGE.USERNAME_MIN_CHARACTER,
                },
                {
                  max: 15,
                  message: VALIDATE_MESSAGE.USERNAME_MAX_CHARACTER,
                },
              ]}
            >
              <Input
                className="rounded-full p-3 border-black text-black"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder={PLACEHOLDER_FORM.USERNAME}
              />
            </Form.Item>
            <Form.Item
              name={FORM_FIELDS.PASSWORD}
              rules={[
                {
                  required: true,
                  message: VALIDATE_MESSAGE.PASSWORD_REQUIRED,
                },
                {
                  min: 6,
                  message: VALIDATE_MESSAGE.PASSWORD_LENGTH,
                },
              ]}
            >
              <Input.Password
                className="rounded-full p-3 border-black text-black"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder={PLACEHOLDER_FORM.PASSWORD}
              />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="-mt-2 mb-3">Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="basis-full bg-black rounded-full text-white font-bold text-lg w-full pt-2 pb-2 h-fit"
                style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div>
          <Link className="text-[#d33d57] underline underline-offset-2" to={PUBLIC_ROUTE.FORGOT_PASSWORD}>
            Forgot Password?
          </Link>
        </div>

        <div>
          <h4 className="font-bold mt-3 mb-2">Don't have an account?</h4>
          <Link className="text-[#d33d57] underline underline-offset-2" to={PUBLIC_ROUTE.SIGN_UP}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;

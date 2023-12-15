import { Button, Form, Input, Carousel, message } from "antd";
import { Link } from "react-router-dom";
import AuthCarousel from "../../components/auth/AuthCarousel";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/services/authService";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await dispatch(registerUser(values)).unwrap();
      message.success("Your registration has been successfully created");
      navigate("/loginPage");
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative bg-gray-50">
          <h1 className="text-center text-5xl font-bold mb-6">LOGO</h1>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              hasFeedback
              label="Kullanıcı Adı"
              name={"username"}
              rules={[
                {
                  required: true,
                  message: "Username Field Cannot Be Left Blank!",
                },
                {
                  min: 3,
                  message: "Username must be at least 3 characters!",
                },
                {
                  max: 20,
                  message: "Username must be at most 20 characters!",
                },
              ]}
            >
              <Input
                prefix={
                  <UserOutlined className="site-form-item-icon text-gray-400" />
                }
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              label="E-mail"
              name={"email"}
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input
                prefix={
                  <MailOutlined className="site-form-item-icon text-gray-400" />
                }
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              label="Şifre"
              name={"password"}
              rules={[
                {
                  required: true,
                  message: "Şifre Alanı Boş Bırakılamaz!",
                },
                {
                  min: 6,
                  message: "password must be at least 6 characters!",
                },

                {
                  max: 20,
                  message: "password must be at most 20 characters!",
                },
              ]}
            >
              <Input.Password
                prefix={
                  <LockOutlined className="site-form-item-icon text-gray-400" />
                }
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              label="Şifre Tekrar"
              name={"passwordAgain"}
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Şifre Tekrar Alanı Boş Bırakılamaz!",
                },
                {
                  min: 6,
                  message: "password must be at least 6 characters!",
                },

                {
                  max: 20,
                  message: "password must be at most 20 characters!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={
                  <LockOutlined className="site-form-item-icon text-gray-400" />
                }
                placeholder="Re-Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
              >
                Kaydol
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center absolute left-0 bottom-10 w-full">
            Bir hesabınız var mı?&nbsp;
            <Link to="/loginPage" className="text-blue-600">
              Şimdi giriş yap
            </Link>
          </div>
        </div>

        <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full">
          <div className="w-full h-full flex items-center">
            <div className="w-full">
              <Carousel className="!h-full px-6" autoplay>
                <AuthCarousel
                  img="/images/responsive.svg"
                  title="Responsive"
                  desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                />
                <AuthCarousel
                  img="/images/statistic.svg"
                  title="İstatistikler"
                  desc="Geniş Tutulan İstatistikler"
                />
                <AuthCarousel
                  img="/images/customer.svg"
                  title="Müşteri Memnuniyeti"
                  desc="Deneyim Sonunda Üründen Memnun Müşteriler"
                />
                <AuthCarousel
                  img="/images/admin.svg"
                  title="Yönetici Paneli"
                  desc="Tek Yerden Yönetim"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

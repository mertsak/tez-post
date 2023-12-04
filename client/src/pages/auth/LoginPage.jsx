import { Button, Form, Input, Carousel, Checkbox } from "antd";
import { Link } from "react-router-dom";
import AuthCarousel from "../../components/auth/AuthCarousel";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

const LoginPage = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative bg-gray-50">
          <h1 className="text-center text-5xl font-bold mb-6">LOGO</h1>
          <Form layout="vertical">
            <Form.Item
              hasFeedback
              label="E-mail"
              name={"email"}
              rules={[
                {
                  required: true,
                  message: "E-mail Alanı Boş Bırakılamaz!",
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
              ]}
            >
              <Input.Password
                prefix={
                  <LockOutlined className="site-form-item-icon text-gray-400" />
                }
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <div className="flex justify-between items-center">
                <Checkbox>Remember Me</Checkbox>
                <Link>Forgot Password?</Link>
              </div>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                size="large"
              >
                Giriş Yap
              </Button>
            </Form.Item>
          </Form>

          <div className="flex justify-center absolute left-0 bottom-10 w-full">
            Bir hesabınız yok mu?&nbsp;
            <Link to="/registerPage" className="text-blue-600">
              Şimdi kayıt olun
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

export default LoginPage;

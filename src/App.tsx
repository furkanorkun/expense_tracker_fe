import { Routes, Route } from "react-router-dom";
import SignUp from "./components/signup";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label:`nav ${index + 1}`,
          }))}
        />
      </Header>
      <Content className="site-layout" style={{ paddingTop: "50px", marginTop: 64 }}>
        <Routes>
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>

  )
}

export default App;

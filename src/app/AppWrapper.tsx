import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "../styles/GlobalStyles";

import { Layout } from "antd";
import SiderLeft from "../components/SiderLeft/SiderLeft";

const { Content } = Layout;

const AppWrapper: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Layout hasSider={true}>
          <SiderLeft toggle={toggle} collapsed={collapsed}></SiderLeft>
          <Layout className="site-layout">
            <Content
              className="AppMain"
              style={{
                margin: "1rem",
                padding: "1rem",
              }}
              onClick={() => setCollapsed(true)}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </div>
    </ThemeProvider>
  );
};

export default AppWrapper;

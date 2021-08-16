import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHome } from "react-icons/ai";
import { RiVirusLine } from "react-icons/ri";

const { Sider } = Layout;

interface ISiderLeftProps {
  toggle: any;
  collapsed: boolean;
}

const SiderLeft: React.FC<ISiderLeftProps> = ({ toggle, collapsed }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted === false) return <>...</>;
  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={[router.pathname]}
          forceSubMenuRender={true}
          style={{ height: "100%" }}
        >
          <Menu.ItemGroup
            title={
              <div
                onClick={toggle}
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                {collapsed ? ">" : "<"}
              </div>
            }
          >
            <Menu.Item key="/" icon={<AiOutlineHome></AiOutlineHome>}>
              <Link href="/" passHref={true}>
                Home
              </Link>
            </Menu.Item>

            <Menu.Item key="/covidapp" icon={<RiVirusLine></RiVirusLine>}>
              <Link href="/covidapp" passHref={true}>
                Covid App
              </Link>
            </Menu.Item>

            <Menu.Item key="3">Portfolio</Menu.Item>
            <Menu.Item key="4">E-Commerce</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Sider>
    </>
  );
};

export default SiderLeft;

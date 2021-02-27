import React from 'react';
import '../App.css';

import { BookTwoTone,HomeTwoTone } from '@ant-design/icons';

import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class compro_1_leyout extends React.Component {
    
    state = {
        collapsed: false,
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

    render(){
      return(
        <div className="App">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{minHeight:'100vh'}}>
              <Menu.Item key="1" icon={<HomeTwoTone />}>
                Home
              </Menu.Item>
              <Menu.Item key="2" icon={<BookTwoTone />}>
                nav 2
              </Menu.Item>
              <Menu.Item key="3" icon={<BookTwoTone />}>
                nav 3
              </Menu.Item>
              <Menu.Item key="4" icon={<BookTwoTone />}>
                nav 4
              </Menu.Item>
              <Menu.Item key="5" icon={<BookTwoTone />}>
                nav 5
              </Menu.Item>
              <Menu.Item key="6" icon={<BookTwoTone />}>
                nav 6
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </div>
      );
    }
    
}
    export default compro_1_leyout
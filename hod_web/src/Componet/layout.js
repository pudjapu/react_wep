import React from 'react';
import '../App.css';

import { BookTwoTone,HomeTwoTone,AppstoreTwoTone  } from '@ant-design/icons';

import { Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;

class compro_1_leyout extends React.Component {
    
    state = {
        collapsed: false,
        at_cack: 1
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{minHeight:'100vh',marginTop: 60,fontSize: '15px'}}>
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
            <Header className="site-layout-background" >
              <div style={{ textAlign: 'left' ,paddingLeft: 0,marginLeft: -50 ,fontSize: '20px'}}>
              {React.createElement(this.state.collapsed ? AppstoreTwoTone  : AppstoreTwoTone , {
                className: 'trigger',
                onClick: this.toggle,
              })}
              </div>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              {this.state.at_cack}
            </Content>
          </Layout>
        </Layout>
      </div>
      );
    }
    
}
    export default compro_1_leyout
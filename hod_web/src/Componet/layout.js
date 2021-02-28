import React from 'react';
import '../App.css';

import Home from './home';
import Det from './det';

import { BookTwoTone,HomeTwoTone,AppstoreTwoTone  } from '@ant-design/icons';

import { Layout, Menu } from 'antd';

import { Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

class compro_1_leyout extends React.Component {
    
    state = {
        collapsed: true,
        at_cack: <Home/>
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

    

    render(){
      return(
        <HashRouter>
        <div className="App">
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline"  style={{minHeight:'100vh',marginTop: 60,fontSize: '15px'}}>
              <Menu.Item key="1" icon={<HomeTwoTone />}>
                <Link to='/'>Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<BookTwoTone />}>
                <Link to='/Det'>nav 2</Link>
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
              <div style={{ textAlign: 'left' ,paddingLeft: 0,marginLeft: -47 ,fontSize: '20px'}}>
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
              <Route exact path='/' component={Home}></Route>
              <Route path='/Det' component={Det}></Route>
            </Content>
          </Layout>
        </Layout>
      </div>
      </HashRouter>
      );
    }
    
}
    export default compro_1_leyout
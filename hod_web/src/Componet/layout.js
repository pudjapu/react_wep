import React from 'react';
import '../App.css';

import Home from './home';
import Bisection from './bisection_method';
import False_position from './false_position'
import Test from './test'
import OnePoint from './one-point_iteration'
import Newton from './Newton'
import Secant from './Secant'
import Cramer from './cramer_rule'
import Polynomial from './polynomial'

//import { BookTwoTone,HomeTwoTone,AppstoreTwoTone,QuestionCircleTwoTone,InteractionTwoTone  } from '@ant-design/icons';

//import { Layout, Menu } from 'antd';

import { Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { Link } from "react-router-dom";




import { Layout, Menu} from 'antd';
import {
  DesktopOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

//const { Header, Sider, Content } = Layout;

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

      state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        this.setState({ collapsed });
      };
    

    render(){

      const { collapsed } = this.state;

      return(
      <HashRouter>
      <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DesktopOutlined/>} style={{marginTop: '64px'}}><Link to='/'>Home</Link></Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Roots of equation">
            <Menu.Item key="2"><Link to='/Bisection'>Bisection</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/False_position'>False position</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/OnePoint'>One-point iteration</Link></Menu.Item>
            <Menu.Item key="5"><Link to='/Newton'>Newton Raphson</Link></Menu.Item>
            <Menu.Item key="6"><Link to='/Secant'>Secant</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Matrix">
            <Menu.Item key="7"><Link to='/cramer_rule'>Cramer</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<TeamOutlined />} title="Interpolation">
            <Menu.Item key="7"><Link to='/polynomial'>Polynomial</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' ,marginTop: '20px'}}>
              <Route exact path='/' component={Home}></Route>
              <Route path='/Bisection' component={Bisection}></Route>
              <Route path='/False_position' component={False_position}></Route>
              <Route path='/OnePoint' component={OnePoint}></Route>
              <Route path='/Newton' component={Newton}></Route>
              <Route path='/Secant' component={Secant}></Route>
              <Route path='/cramer_rule' component={Cramer}></Route>
              <Route path='/polynomial' component={Polynomial}></Route>
              <Route path='/test' component={Test}></Route>
        </Content>
      </Layout>
    </Layout>
    </HashRouter>
      );
    }
    
}
    export default compro_1_leyout
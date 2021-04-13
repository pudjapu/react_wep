import React from 'react';
import '../App.css';

import Home from './home';
import Bisection from './bisection_method';
import False_position from './false_position'
import OnePoint from './one-point_iteration'
import Newton from './Newton'
import Secant from './Secant'
import Cramer from './cramer_rule'
import Polynomial from './polynomial'
import Gauss_Elimination from './Gauss_Elimination'
import Gauss_jodan from './Gauss-Jodan'
import Lu_decomposition from './lu_decomposition'
import Jacobi_iteration from './Jacobi_iteration'

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
            <Menu.Item key="8"><Link to='/Gauss_Elimination'>Gauss Elimination</Link></Menu.Item>
            <Menu.Item key="9"><Link to='/Gauss_jodan'>Gauss Jodan</Link></Menu.Item>
            <Menu.Item key="10"><Link to='/lu_de'>Lu decomposition</Link></Menu.Item>
            <Menu.Item key="11"><Link to='/jacobi_iter'>Jacobi iteration</Link></Menu.Item>
            <Menu.Item key="12"><Link to='/gauss-seidel_iter'>Gauss-seidel iteration</Link></Menu.Item>
            <Menu.Item key="13"><Link to='/conjugate'>Conjugate gradient</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<TeamOutlined />} title="Interpolation">
            <Menu.Item key="14"><Link to='/polynomial'>Polynomial</Link></Menu.Item>
            <Menu.Item key="15"><Link to='/lagrang'>Lagrang interpolation</Link></Menu.Item>
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
              <Route path='/Gauss_Elimination' component={Gauss_Elimination}></Route>
              <Route path='/Gauss_jodan' component={Gauss_jodan}></Route>
              <Route path='/lu_de' component={Lu_decomposition}></Route>
              <Route path='/jacobi_iter' component={Jacobi_iteration}></Route>
              <Route path='/gauss-seidel_iter' component={Gauss_jodan}></Route>
              <Route path='/conjugate' component={Gauss_jodan}></Route>
              <Route path='/polynomial' component={Polynomial}></Route>
              <Route path='/lagrang' component={Polynomial}></Route>
        </Content>
      </Layout>
    </Layout>
    </HashRouter>
      );
    }
    
}
    export default compro_1_leyout
import React from 'react'
import 'antd/dist/antd.min.css'
import HomePage from '../Pages/HomePage'
import { Link, Route, Routes } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { MovieDetailPage } from '../Pages/MovieDetailPage';

const HeaderComponent = () => {
  const { Header, Content } = Layout;


  return (
    <Layout className="layout" style={{ backgroundColor: "black", height: 60 }} >
      <Header>
        <Menu theme="dark" mode='horizontal' width={50}>
          <Menu.Item key="1"><Link to="/" />Home</Menu.Item>

        </Menu>
        <Content >
          <div className='site-layout-content'>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route  path="/details/:id" element={<MovieDetailPage/>}/>
            </Routes>
          </div>
        </Content>
      </Header>
    </Layout>

  )
}
export default HeaderComponent;

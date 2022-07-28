import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Album from './pages/Album';
import { library } from './helpers/albumList';
import Main from './pages/Main';
import './App.css';
import { Link } from 'react-router-dom';
import Player from './components/AudioPlayer';
import { Layout } from 'antd';
import Spotify from './images/2.jpg';
import { SearchOutlined, DownCircleOutlined } from '@ant-design/icons';
const { Content, Sider, Footer } = Layout;
const App = () => {
  const [nftAlbum, setNftAlbum] = useState();
  return (
    <>
      <Layout>
        <Layout>
          <Sider width={300} className="sideBar">
            <img src={Spotify} alt="Logo" className="logo"></img>
            <div className="searchBar">
              <span> Search </span>
              <SearchOutlined style={{ fontSize: '30px' }} />
            </div>
            <Link to="/">
              <p style={{ color: 'FFFFFF' }}> Home </p>
            </Link>
            <Link to="/Main" element={<Main />}>
              <p> Explore </p>
            </Link>
            <div className="recentPlayed">
              <p className="recentTitle">RECENTLY PLAYED</p>
              <div className="albums">
                {library.slice(0, 3).map((e) => (
                  <Link to="/album" state={e} className="albumSelection">
                    <img
                      src={e.image}
                      alt="bull"
                      style={{ width: '65px', marginBottom: '0px' }}
                    ></img>
                    <p>{e.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Sider>
          <Content className="contentWindow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/album"
                element={<Album setNftAlbum={setNftAlbum} />}
              />
              <Route path="/Main" element={<Main />} />
            </Routes>
          </Content>
        </Layout>
        <Footer className="footer">
          {nftAlbum && <Player url={nftAlbum} />}
        </Footer>
      </Layout>
    </>
  );
};
export default App;

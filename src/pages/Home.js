import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Tabs } from "antd";
import { library } from "../helpers/albumList";
const { TabPane } = Tabs;
const Home = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" centered>
              <TabPane tab="FEATURED" key="1">
                <h1 className="featuredTitle">NFT'S & Collectibles</h1>
                <div className="albums">
                  {library.map((e) => (
                    <Link to="/album" state={e} className="albumSelection">
                      <img
                        src={e.image}
                        alt="bull"
                        style={{ width: "150px", marginBottom: "10px" }}
                      ></img>
                      <p>{e.title}</p>
                    </Link>
                  ))}
                </div>
              </TabPane>
              <TabPane tab="GAMING & MUSIC" key="2">
                <h1 className="featuredTitle">Featured Mints</h1>
                <div className="albums">
                  {library.slice(7, 13).map((e) => (
                    <Link to="/album" state={e} className="albumSelection">
                      <img
                        src={e.image}
                        alt="bull"
                        style={{ width: "150px", marginBottom: "10px" }}
                      ></img>
                      <p>{e.title}</p>
                    </Link>
                  ))}
                </div>
                <h1 className="featuredTitle">Top Hits</h1>
                <div className="albums">
                  {library.slice(5, 11).map((e) => (
                    <Link to="/album" state={e} className="albumSelection">
                      <img
                        src={e.image}
                        alt="bull"
                        style={{ width: "150px", marginBottom: "10px" }}
                      ></img>
                      <p>{e.title}</p>
                    </Link>
                  ))}
                </div>
                <h1 className="featuredTitle">Generative Art</h1>
                <div className="albums">
                  {library.slice(0, 6).map((e) => (
                    <Link to="/album" state={e} className="albumSelection">
                      <img
                        src={e.image}
                        alt="bull"
                        style={{ width: "150px", marginBottom: "10px" }}
                      ></img>
                      <p>{e.title}</p>
                    </Link>
                  ))}
                </div>
                <h1 className="featuredTitle">One-of-one (1/1) Artwork</h1>
                <div className="albums">
                  {library.slice(5, 11).map((e) => (
                    <Link to="/album" state={e} className="albumSelection">
                      <img
                        src={e.image}
                        alt="bull"
                        style={{ width: "150px", marginBottom: "10px" }}
                      ></img>
                      <p>{e.title}</p>
                    </Link>
                  ))}
                </div>
              </TabPane>
              <TabPane tab="NEW RELEASES" key="3">
                <h1 className="featuredTitle">Hot Off The Press</h1>
                <div className="albums">
                  {library.map((e) => (
                    <Link to="/album" state={e} className="albumSelection">
                      <img
                        src={e.image}
                        alt="bull"
                        style={{ width: "150px", marginBottom: "10px" }}
                      ></img>
                      <p>{e.title}</p>
                    </Link>
                  ))}
                </div>
              </TabPane>
            </Tabs>
    </>
  );
};
export default Home;
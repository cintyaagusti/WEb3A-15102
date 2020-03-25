import React from 'react';
import './App.css';
import { Carousel } from 'antd';
import { Card, Col, Row } from 'antd';
import { Avatar } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, HomeOutlined, FormOutlined } from '@ant-design/icons';
import { List } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Tutor from './container/Tutor';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;


function App() {

  const data = [
    {
      day   : "Senin",
      ruang : "~Dream~",
      kelas : "Kelas Kosa Kata",
    },
    {
      day   : "Selasa",
      ruang : "~Cherry Rooms~",
      kelas : "Kelas Menulis",
    },
    {
      day   : "Rabu",
      ruang : "~Angel Rooms~",
      kelas : "Kelas Membaca",
    },
    {
      day   : "Kamis",
      ruang : "~Boss Rooms~",
      kelas : "Kelas Mendengarkan",
    },
    {
      day   : "Jum'at",
      ruang : "~Boom Rooms~",
      kelas : "Kelas Ujian",
    },
    {
      day   : "Sabtu",
      ruang : "~Paradise Rooms~",
      kelas : "Kelas Hiburan",
    },
  ];


  return(

      <Layout>
        <Header className="header">
            <Avatar shape="square" size={64} src="https://pbs.twimg.com/profile_images/1230331379902226435/WG41uwKH_400x400.png" />
        </Header>

        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <HomeOutlined />
                    Kelas
                  </span>
                }
              >
                <Menu.Item key="2">Pilih Paket Belajar</Menu.Item>
                <Menu.Item key="3">Pilih Jadwal Belajar</Menu.Item>
                <Menu.Item key="4">Pilih Pengajar</Menu.Item>
              </SubMenu>

              <SubMenu
                key="sub2"
                title={
                  <span>
                    <UserOutlined />
                    Registrasi
                  </span>
                }
              >
                <Menu.Item key="5">Pendaftaran</Menu.Item>
                <Menu.Item key="6">Pembayaran</Menu.Item>
                <Menu.Item key="7">Cara Mendaftar</Menu.Item>
                <Menu.Item key="8">Cara Membayar</Menu.Item>
              </SubMenu>

                <SubMenu
                key="sub3"
                title={
                  <span>
                    <FormOutlined />
                    Kritik dan Saran
                  </span>
                }
              >
                <Menu.Item key="9">Kritik</Menu.Item>
                <Menu.Item key="10">Saran</Menu.Item>
              </SubMenu>
          </Menu>
        </Sider>

        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Beranda</Breadcrumb.Item>
            <Breadcrumb.Item>Kelas</Breadcrumb.Item>
          </Breadcrumb>

            <Content
                className="site-layout-background"
                style={{
                  padding: 'o 50px',
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Carousel autoplay>
                      <div>
                        <h1>Welcome to NeoZone City</h1>
                      </div>
                      <div>
                        <h1>Rumah Belajar Bahasa Korea No.1 di Indonesia</h1>
                      </div>
                      <div>
                        <h1>Memberikan Pengalaman Yang Sangat Menarik</h1>
                      </div>
                      <div>
                        <h1>Bersama Tutor Asli Dari Korea</h1>
                      </div>
                </Carousel>

                    <div className="site-card">
                      <Row gutter={10} justify="center">
                        <Col span={5}>
                          <Card
                            style={{ width: 240 }}
                            cover={
                              <img
                                src="https://pm1.narvii.com/6979/d74fb5ee77d9f4e0361b983548a630a15e007f0ar1-1000-705v2_hq.jpg"
                              />
                            }
                          >
                            <Meta
                              title="Regular"
                              description="Paket kelas belajar 3 materi yang dijadikan 3x pertemuan setiap minggu (bebas memilih kelas apa saja)."
                            />
                          </Card>
                        </Col>
                        <Col span={5}>
                          <Card
                            style={{ width: 240 }}
                            cover={
                              <img
                                src="https://pm1.narvii.com/6979/f2626d6472877eb0e9f9313d2d218318d9997483r1-1000-705v2_hq.jpg"
                              />
                            }
                          >
                            <Meta
                              title="Irregular"
                              description="Paket kelas belajar lengkap 6 materi yang dijadikan 6x pertemuan setiap minggu. Fullday~"
                            />
                          </Card>
                        </Col>
                      </Row> 
                    </div>

                    <div className="list-card">
                    <List
                      grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 6,
                        xxl: 3,
                      }}
                      dataSource={data}
                      renderItem={item => (
                        <List.Item>
                          <Card title={item.day}>
                              <p> {item.ruang} </p>
                              <p> {item.kelas} </p>
                            </Card>
                        </List.Item>
                      )}
                    />    
                    </div>       
                    
                    <div className="site-card-wrapper" >
                      <Row gutter={10} justify="center">
                        <Col span={5}>
                          <Card 
                            hoverable
                            style={{width: 240 }}
                            cover={<img src="https://nctindonesia.files.wordpress.com/2020/02/200216_18.jpg?w=800&h=800&crop=1.png"/>}
                            >
                            <Meta title="Jaehyun Jung" description="@_jeongjaehyun" />
                          
                                <Tutor />
                           
                          </Card>
                        </Col>
                        <Col span={5}>
                          <Card
                              hoverable
                              style={{ width: 240 }}
                              cover={<img src="https://i.pinimg.com/originals/8b/f3/01/8bf3018f14a5fe0f7656c2ee9a057032.jpg" />}
                              >
                              <Meta title="Doyoung Kim" description="@bunny_doyoung"/>

                              <Tutor />

                            </Card>
                        </Col>
                        <Col span={5}>
                          <Card
                              hoverable
                              style={{ width: 240 }}
                              cover={<img src="https://66.media.tumblr.com/575b691da9bd7b0be9603e7d1804191f/4c49d9826332059e-58/s1280x1920/aba9d04f40a66db5c1bd725536c7dc0d1eafc8a7.jpg" />}
                              >
                              <Meta title="Taeyong Lee" description="@tiwaylee" />

                              <Tutor />

                            </Card>
                        </Col>
                      </Row>  
                    </div>
              </Content>
            </Layout>

      </Layout>

      <Footer style={{ textAlign: 'center' }}>design ©2020 created by cintyaaakim</Footer>

    </Layout>

  );

}
  
export default App;
  
      
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Col, Row } from 'antd';

function App() {

    const cardData =  [
      {
        title : "Jung Jaehyun",
        job : "Project Manager",
      },
      {
        title : "Kim Doyoung",
        job : "Data Analyst",
      },
      {
        title : "Kim Taeyong",
        job : "UI/UX Designer",
      }
    ]
  
    return (
      <div className="site-card-wrapper">
          <Row gutter={16}>
            {cardData.map (data=>
              <Col span={8}>
                <Card title="ID Employee" bordered={true}>
                  <p className="title">{data.title} </p>
                  <p> {data.job} </p>
                </Card>
              </Col>
            )}
          </Row>
      </div>
  );
}


export default App;

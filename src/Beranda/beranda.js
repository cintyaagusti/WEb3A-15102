import React, { Component } from 'react'; //import dari react biasa
import { Layout, Row, Col, Modal } from 'antd'; //import dari ant seperti biasa
//import './App.css';
import '../Beranda/beranda.css' //import css dari folder css yang ada di folder assets
import Navbar from '../common/layout/navbar-beranda' //import komponen navbar dari folder layout yang ada di folder common 
import ButtonBeranda from '../common/button/button-beranda'; //import komponen buttonhome yang ada di dalamn folder component yang ada di folder common
import { Carousel } from 'antd';
import SizeContext from 'antd/lib/config-provider/SizeContext';

const { Content } = Layout; // membuat konstanta content yang berasal dari bawaan layout ant design, bisa dicek di dokumentasi antdesign

class Beranda extends Component{

    render(){
        //const image1 = require(`../assets/images/picture.svg`); //membuat variabel image 1 dimana isinya merupakan importan gambar yang ada dari folder images
        const {initialData,showModal,handleOk,handleCancel} = this.props; {/* ini merupakan fungsi" yang sudah di definsiikan di landing-page.js 
        kemudian kita panggil di halaman landing-component.js ketika kita memamnggil komponent dari parent komponen, komponen yang dipanggil
        akan menjadi sebuah properti, kemudian kita dapat menggunakan properti itu dihalaman ini.
        */}
        return(
            <Layout className="landing-container" justify='center'>
                {/* <Navbar/>  ini merupakan component navbar yang kita import dari folder layout yang ada di common */}
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
                            <img src="https://i1.wp.com/kpopchart.net/wp-content/uploads/2020/02/Neo-Zone-scaled.jpeg?fit=2560%2C1707&ssl=1.jpg" width='1555' height='400'/>
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
                </Content>
            </Layout>
        );
    }
}

export default Beranda;

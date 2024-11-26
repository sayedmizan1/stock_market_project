import React, { Component } from 'react'
// import Top1 from './Top1'
// import TradingView from './TradingView'
// import MenuCard from './MenuCard'
import { MiniChart } from "react-ts-tradingview-widgets";
import img from './img.jpg'


export default class home extends Component {
  render() {

    return (
      <div>
  {/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg" width="1540" height="500" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/6801651/pexels-photo-6801651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="1540" height="500"  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/5561923/pexels-photo-5561923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="1540" height="500" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
{/* <div id="carouselExampleInterval" style={{padding:30}} class="carousel slide p-30" data-bs-ride="carousel">
  <div class="carousel-inner p-30">
    <div class="carousel-item active p-30" data-bs-interval="10000">
      <img src="https://hips.hearstapps.com/hmg-prod/images/stock-market-crash-1583776811.png" width="1540" height="500" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirTLssTMDWKFunUKU16RXm0-YiIWxp0f8kA&usqp=CAU" width="1540" height="500" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.visualcapitalist.com/wp-content/uploads/2017/02/stock-market-terms-share.png" width="1540" height="500" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
<div className="container">
  <img src="https://img.freepik.com/premium-photo/trader-drawing-stock-market-graph-chart-dark-background-technical-investment-analysis-concept_50039-2920.jpg" alt="" />
</div>
<h1 class="shadow-lg p-3 mb-5 bg-white rounded" style={{color:"green"}}>Top Gainer Company</h1>


  
<div class="scrollmenu m-3 " style={{  backgroundColor: "#333",
  overflow: 'auto',
  whiteSpace: 'nowrap'}}>
 <div className='col-sm-4' style={{ display: "inline-block",
  color: "white",
  textAlign: "center",
  padding: "14px",
  textDecoration: "none"}}><MiniChart colorTheme="dark"  symbol="KOTAKBANK"width="100%"></MiniChart></div>
 <div className='col-sm-4' style={{ display: "inline-block",
  color: "white",
  textAlign: "center",
  padding: "14px",
  textDecoration: "none"}}><MiniChart colorTheme="dark"  symbol="TCS"width="100%"></MiniChart></div>
 <div className='col-sm-4' style={{ display: "inline-block",
  color: "white",
  textAlign: "center",
  padding: "14px",
  textDecoration: "none"}}><MiniChart colorTheme="dark"  symbol="HINDUNILVR"width="100%"></MiniChart></div>
 <div className='col-sm-4' style={{ display: "inline-block",
  color: "white",
  textAlign: "center",
  padding: "14px",
  textDecoration: "none"}}><MiniChart colorTheme="dark"  symbol="ICICIBANK"width="100%"></MiniChart></div>
 <div className='col-sm-4'style={{ display: "inline-block",
  color: "white",
  textAlign: "center",
  padding: "14px",
  textDecoration: "none"}}><MiniChart colorTheme="dark"  symbol="SBIN"width="100%"></MiniChart></div>
 <div className='col-sm-4'style={{ display: "inline-block",
  color: "white",
  textAlign: "center",
  padding: "14px",
  textDecoration: "none"}}><MiniChart colorTheme="dark"  symbol="SUNPHARMA"width="100%"></MiniChart></div>
 </div>

      
<h1 class="shadow-lg p-3  bg-white rounded" style={{marginTop:25, marginBottom:25 ,color:"red"}}>Top Loser Company</h1>
<div class="scrollmenu m-3 " style={{  backgroundColor: "#333",
  overflow: 'auto',
  whiteSpace: 'nowrap'}}>
 <div className='col-sm-4' style={{ display: "inline-block",
  color: "white",
  textAlign: "center",
  padding: "14px",
  textDecoration: "none"}}><MiniChart colorTheme="dark"  symbol="IFCI"width="100%"></MiniChart></div>
 <div className='col-sm-4' style={{ display: "inline-block",
  color: "white",
  textAlign: "center",
  padding: "14px",
  textDecoration: "none"}}><MiniChart colorTheme="dark"  symbol="WPR"width="100%"></MiniChart></div>
 <div className='col-sm-4' style={{ display: "inline-block",
  color: "white",
  textAlign: "center",
  padding: "14px",
  textDecoration: "none"}}><MiniChart colorTheme="dark"  symbol="TRIDENT"width="100%"></MiniChart></div>
 <div className='col-sm-4' style={{ display: "inline-block",
  color: "white",
  textAlign: "center",
  padding: "14px",
  textDecoration: "none"}}><MiniChart colorTheme="dark"  symbol="ICICIBANK"width="100%"></MiniChart></div>
 <div className='col-sm-4'style={{ display: "inline-block",
  color: "white",
  textAlign: "center",
  padding: "14px",
  textDecoration: "none"}}><MiniChart colorTheme="dark"  symbol="SBIN"width="100%"></MiniChart></div>
 <div className='col-sm-4'style={{ display: "inline-block",
  color: "white",
  textAlign: "center",
  padding: "14px",
  textDecoration: "none"}}><MiniChart colorTheme="dark"  symbol="SUNPHARMA"width="100%"></MiniChart></div>
 </div>
        <div className="container" style={{marginTop:25, marginBottom:25 }}></div>
      </div>
    )
  }
}

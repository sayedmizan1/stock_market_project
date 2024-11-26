import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { TickerTape } from 'react-ts-tradingview-widgets';
// import TradingViewWidget, { Themes } from 'react-ts-tradingview-widget';
import { MarketOverview } from 'react-ts-tradingview-widgets';
// const App = () => (
//   <TradingViewWidget
//     symbol="NASDAQ:AAPL"
//     theme={Themes.DARK}
//     locale="fr"
//     autosize
//   />
// );
export default function Navbar() {
  return (
    <div>
   
  
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{backgroundcolor: "black"}}>
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#" style={{fontSize:"35px"}}>Stock-Market</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
   
        <li className="nav-item">
          <Link className="nav-link active"style={{fontSize:"25px"}} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"style={{fontSize:"25px"}} aria-current="page" to="/business">News</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" style={{fontSize:"25px"}}aria-current="page" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" style={{fontSize:"25px"}}aria-current="page" to="/subscribe">Subscribe Us</Link>
        </li>
      </ul>
    <a className="navbar-brand" href="#" style={{fontSize:"45px" ,marginRight:380}}>Stock-Market</a>
      {/* <div className="form-check form-switch text-dark">
  <input className="form-check-input text-dark"   onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}   htmlfor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div> */}
<form class="d-flex">
        <input class="form-control me-2" type="search stock" placeholder="Search stock" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<TickerTape/>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

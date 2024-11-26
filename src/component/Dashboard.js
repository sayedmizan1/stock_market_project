// import React, { Component } from 'react'
// import Chart from 'react-apexcharts'
// import './Das.css'
// import './App.css';
// import TradingViewWidget from './TradingViewWidget';
// export default class Dashboard extends Component {
    
//     constructor(props) {
//         super(props);
    
//         this.updateCharts = this.updateCharts.bind(this);
    
//         this.state = {
//           optionsMixedChart: {
//             chart: {
//               id: "basic-bar",
//               toolbar: {
//                 show: false
//               }
//             },
//             plotOptions: {
//               bar: {
//                 columnWidth: "50%"
//               }
//             },
//             stroke: {
//               width: [4, 0, 0]
//             },
//             xaxis: {
//               categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
//             },
//             markers: {
//               size: 6,
//               strokeWidth: 3,
//               fillOpacity: 0,
//               strokeOpacity: 0,
//               hover: {
//                 size: 8
//               }
//             },
//             yaxis: {
//               tickAmount: 5,
//               min: 0,
//               max: 100
//             }
//           },
//           seriesMixedChart: [
//             {
//               name: "series-1",
//               type: "line",
//               data: [30, 40, 25, 50, 49, 21, 70, 51]
//             },
//             {
//               name: "series-2",
//               type: "column",
//               data: [23, 12, 54, 61, 32, 56, 81, 19]
//             },
//             {
//               name: "series-3",
//               type: "column",
//               data: [62, 12, 45, 55, 76, 41, 23, 43]
//             }
//           ],
//           optionsRadial: {
//             plotOptions: {
//               radialBar: {
//                 startAngle: -135,
//                 endAngle: 225,
//                 hollow: {
//                   margin: 0,
//                   size: "70%",
//                   background: "#fff",
//                   image: undefined,
//                   imageOffsetX: 0,
//                   imageOffsetY: 0,
//                   position: "front",
//                   dropShadow: {
//                     enabled: true,
//                     top: 3,
//                     left: 0,
//                     blur: 4,
//                     opacity: 0.24
//                   }
//                 },
//                 track: {
//                   background: "#fff",
//                   strokeWidth: "67%",
//                   margin: 0, // margin is in pixels
//                   dropShadow: {
//                     enabled: true,
//                     top: -3,
//                     left: 0,
//                     blur: 4,
//                     opacity: 0.35
//                   }
//                 },
    
//                 dataLabels: {
//                   showOn: "always",
//                   name: {
//                     offsetY: -20,
//                     show: true,
//                     color: "#888",
//                     fontSize: "13px"
//                   },
//                   value: {
//                     formatter: function (val) {
//                       return val;
//                     },
//                     color: "#111",
//                     fontSize: "30px",
//                     show: true
//                   }
//                 }
//               }
//             },
//             fill: {
//               type: "gradient",
//               gradient: {
//                 shade: "dark",
//                 type: "horizontal",
//                 shadeIntensity: 0.5,
//                 gradientToColors: ["#ABE5A1"],
//                 inverseColors: true,
//                 opacityFrom: 1,
//                 opacityTo: 1,
//                 stops: [0, 100]
//               }
//             },
//             stroke: {
//               lineCap: "round"
//             },
//             labels: ["Growth Chances%"]
            
//           },
//           seriesRadial: [76],
//           optionsBar: {
//             chart: {
//               stacked: true,
//               stackType: "100%",
//               toolbar: {
//                 show: false
//               }
//             },
//             plotOptions: {
//               bar: {
//                 horizontal: true
//               }
//             },
//             dataLabels: {
//               dropShadow: {
//                 enabled: true
//               }
//             },
//             stroke: {
//               width: 0
//             },
//             xaxis: {
//               categories: ["Company Share"],
//               labels: {
//                 show: false
//               },
//               axisBorder: {
//                 show: false
//               },
//               axisTicks: {
//                 show: false
//               }
//             },
//             fill: {
//               opacity: 1,
//               type: "gradient",
//               gradient: {
//                 shade: "dark",
//                 type: "vertical",
//                 shadeIntensity: 0.35,
//                 gradientToColors: undefined,
//                 inverseColors: false,
//                 opacityFrom: 0.85,
//                 opacityTo: 0.85,
//                 stops: [90, 0, 100]
//               }
//             },
    
//             legend: {
//               position: "bottom",
//               horizontalAlign: "right"
//             }
//           },
//           seriesBar: [
//             {
//               name: "Company1",
//               data: [32]
//             },
//             {
//               name: "Company2",
//               data: [41]
//             },
//             {
//               name: "Company3",
//               data: [12]
//             },
//             {
//               name: "Company4",
//               data: [65]
//             }
//           ]
//         };
//       }
    
//       updateCharts() {
//         const max = 90;
//         const min = 30;
//         const newMixedSeries = [];
//         const newBarSeries = [];
    
//         this.state.seriesMixedChart.forEach((s) => {
//           const data = s.data.map(() => {
//             return Math.floor(Math.random() * (max - min + 1)) + min;
//           });
//           newMixedSeries.push({ data: data, type: s.type });
//         });
    
//         this.state.seriesBar.forEach((s) => {
//           const data = s.data.map(() => {
//             return Math.floor(Math.random() * (180 - min + 1)) + min;
//           });
//           newBarSeries.push({ data, name: s.name });
//         });
    
//         this.setState({
//           seriesMixedChart: newMixedSeries,
//           seriesBar: newBarSeries,
//           seriesRadial: [Math.floor(Math.random() * (90 - 50 + 1)) + 50]
//         });
//       }
    
//   render() {
   
//     return (
     
  
        
//       <div>          <div class="pagetitle">
      
//       <nav>
//         <ol class="breadcrumb">
      
       
//         </ol>
//       </nav>
//     </div>

//     <section class="section dashboard"/>
//       <div class="row"/>

       
//         <div class="col-lg-8"/>
//           <div class="row" style={{margin:10,marginBottom:10}}>

//             <div class="col-xxl-4 col-md-6">
//               <div class="card info-card sales-card">

//                 <div class="filter">
//                   <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
//                   <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                     <li class="dropdown-header text-start">
//                       <h6>Filter</h6>
//                     </li>

//                     <li><a class="dropdown-item" href="#">Today</a></li>
//                     <li><a class="dropdown-item" href="#">This Month</a></li>
//                     <li><a class="dropdown-item" href="#">This Year</a></li>
//                   </ul>
//                 </div>

//                 <div class="card-body">
//                   <h5 class="card-title" style={{fontSize:30}}>Money Invested</h5>

//                   <div class="d-flex align-items-center">
//                     <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
//                    <img src="https://cdn.icon-icons.com/icons2/606/PNG/512/shopping-cart_icon-icons.com_56125.png"  width="106" height="106" alt="" />
//                     {/* <svg xmlns="http://www.w3.org/2000/svg" width="160" height="106" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
//   <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> */}
// {/* </svg>  */}
//                     </div>
                   
//                     <div class="ps-3">
//                       <h6>₹2000</h6>
//                       <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>

//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>

         
//             {/* <div class="col-xxl-4 col-md" >
//               <div class="card info-card revenue-card">

//                 <div class="filter" >
//                   <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
//                   <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                     <li class="dropdown-header text-start">
//                       <h6>Filter</h6>
//                     </li>

//                     <li><a class="dropdown-item" href="#">Today</a></li>
//                     <li><a class="dropdown-item" href="#">This Month</a></li>
//                     <li><a class="dropdown-item" href="#">This Year</a></li>
//                   </ul>
//                 </div>

//                 <div class="card-body" >
//                   <h5 class="card-title" style={{fontSize:30}}>Current Value</h5>

//                   <div class="d-flex align-items-center">
//                     <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
//   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
// </svg>
//                     </div>
//                     <div class="ps-3">
//                       <h6>₹3,264</h6>
//                       <span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>

//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>

            
//             <div class="col-xxl-4 col-xl-12">

//               <div class="card info-card customers-card">

//                 <div class="filter">
//                   <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
//                   <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                     <li class="dropdown-header text-start">
//                       <h6>Filter</h6>
//                     </li>

//                     <li><a class="dropdown-item" href="#">Today</a></li>
//                     <li><a class="dropdown-item" href="#">This Month</a></li>
//                     <li><a class="dropdown-item" href="#">This Year</a></li>
//                   </ul>
//                 </div>

//                 <div class="card-body">
//                   <h5 class="card-title" style={{fontSize:30}}>+/-</h5>

//                   <div class="d-flex align-items-center">
//                     <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                     
//                     <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
//   <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
// </svg>
//                     </div>
//                     <div class="ps-3">
//                       <h6>1244</h6>
//                       <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>

//                     </div>
//                   </div>

//                 </div>
//               </div>

//             </div>

     
//             <div class="col-12" style={{marginTop:25}}>
//               <div class="card">

//                 <div class="filter">
//                   <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
//                   <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
//                     <li class="dropdown-header text-start">
//                       <h6>Filter</h6>
//                     </li>

//                     <li><a class="dropdown-item" href="#">Today</a></li>
//                     <li><a class="dropdown-item" href="#">This Month</a></li>
//                     <li><a class="dropdown-item" href="#">This Year</a></li>
//                   </ul>
//                 </div>

//                 <div class="card-body">
//                   <h5 class="card-title"  style={{fontSize:30}} >Reports <span>/Today</span></h5>

        
//                   <div id="reportsChart"></div>
//                   <div className="app">
//         <div className="row my-3">
//           <div className="col mixed-chart" style={{marginLeft:117}}>
//             <Chart
//               options={this.state.optionsMixedChart}
//               series={this.state.seriesMixedChart}
//               type="line"
//               width="500"
//             />
//           </div>

//           <div className="col radial-chart" style={{marginTop:90,marginLeft:175}} >
//             <Chart
//               options={this.state.optionsRadial}
//               series={this.state.seriesRadial}
//               type="radialBar"
//               width="280"
//             />
//           </div>
//         </div>

//         <div className="container my-19 mx-100">
//           <div className="col percentage-chart" >
//             <Chart
//               options={this.state.optionsBar}
//               height={140}
//               series={this.state.seriesBar}
//               type="bar"
//               width={500}
//             />
//           </div>

//           <p className="col">
//             <button onClick={this.updateCharts}>Update!</button>
//           </p>
//         </div>
//       </div>
               

//                 </div>

//               </div>
//             </div>

//       </div> */}
//       <div className="container">
//     <TradingViewWidget/></div>
//       </div>

      
//     )
//   }
// }
import React, { Component } from 'react'
import TradingViewWidget from './TradingViewWidget'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <TradingViewWidget/>
      </div>
    )
  }
}





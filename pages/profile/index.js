import React from 'react';
import { connect } from 'react-redux';
import BreadCrumb from '../../components/elements/BreadCrumb';
import { Table, Tag, Space,Badge } from 'antd';
import DoughnutChart from '../../components/charts/DoughnutChart';
import LineChart from '../../components/charts/LineChart';
import { Card, Button, Row, Col, Form, Checkbox ,Select, } from "antd";
import Header from '../../components/shared/headers/AlexHeader';
import '../../scss/profile/profile.scss'
import Sidenavbar from './sidenavbar';
import { useState } from 'react';
const Profil = () => {
  const { Option } = Select;

  // const data = {
  //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //   datasets: [
  //     {
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)',
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)',
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  const returnColour =status =>{
    const style = { backgroundColor: '#ffc107',borderRadius:'20px',color:'#fff',padding:'5px'}
      switch(status){
        case 'Delivered':
          style.backgroundColor = "#28a745" 
          return style
          break
        case 'Refunded':
          style.backgroundColor = "#dc3545"
          return style
          break
        default:
          return style
      }
  }

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'product',
      key: 'product',
      render: product => <div><img src = {product.image}/> <span>{product.productName}</span></div>,
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Date - Time',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Piece',
      dataIndex: 'piece',
      key: 'piece',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status =>  <span style={returnColour(status)}>{status}</span>
    },
    
 
  ];
  
  const data = [
    {
      key: '1',
      product: {productName:'Apple', image:  "/static/img/profile/watch.png"},
      location: '6096 bloomingdales St',
      date: '12.09.2019 - 12.53 PM',
      piece:'2',
      amount:'200$',
      status:'Delivered',
     
    },
    {
      key: '2',
      product: {productName:'Apple', image:  "/static/img/profile/watch.png"},
      location: '6096 bloomingdales St',
      date: '12.09.2019 - 12.53 PM',
      piece:'2',
      amount:'200$',
      status:'shipped',
     
    },
    {
      key: '3',
      product: {productName:'Apple', image:  "/static/img/profile/watch.png"},
      location: '6096 bloomingdales St',
      date: '12.09.2019 - 12.53 PM',
      piece:'2',
      amount:'200$',
      status:'Refunded',
     
    },
    // {
    //   key: '2',
    //   product: 'Apple',
    //   location: '6096 bloomingdales St',
    //   date: '12.09.2019 - 12.53 PM',
    //   piece:'2',
    //   amount:'200$',
    //   status:'',
    // },
    // {
    //   key: '3',
    //   product: 'Apple',
    //   location: '6096 bloomingdales St',
    //   date: '12.09.2019 - 12.53 PM',
    //   piece:'2',
    //   amount:'200$',
    //   status:'',
    // },
  ];
  
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const [sideBar,setSideBar] = useState(false);
  
  return (
    <>
    <Header/>
<div class="profile-wrapper container">
  
<Row>
<Col lg={{ span: 4 }} md={{ span: 4 }} sm={{ span: 12 }} xs={{ span: 24 }}>
    <div className={sideBar?"":"side-n"}>

<Sidenavbar/>
    </div>
    </Col>
 
    <Col lg={{ span: 20 }} md={{ span: 20 }} sm={{ span: 18 }} xs={{ span: 24 }}>
     
    <div className="site-card-border-less-wrapper">
    <div className="hamburger">
      <i class="fa fa-bars" onClick={()=>setSideBar(!sideBar)}></i>

      </div>
    <Card  bordered={false}>
    <section id="contents">
              <div className="welcome">
             
               
               
                      <div className="dashboard-profile">

                        {/* <form className="form-inline my-2 my-lg-0">
                          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

                        </form> */}
                        <div className="content">
                          <div className="greet-msg">
                            <div className="new_h">
                            <h2>Welcome Back    </h2>
                            <span>Vincent</span>
                            </div>
                            <p>Buy more and save more, Buy more and save more, Buy more and save more, Buy more and save more, Buy more and save more,</p>
                          </div>




                          <div className="img-wel">
                            <img src="/static/img/profile/shoping.png" alt="img" />
                          </div>
                        </div>

                      </div>
                  
          
              
              </div>
              <section className="statistics">
                <div className="container-fluid">
                  <div className="dd">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="box">


                          <div className="info">
                            <div className="box-img">
                              <img src="/static/img/profile/follower.png"/>
                            </div>
                            <div className="follower">
                              <h3>Followers</h3>
                              <span>1,000</span>
                            </div>

                          </div>
                          <div className="trending">
                            <img src="/static/img/profile/trend.png" /> <span>8.5% </span> <p>Up from yesterday</p>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="box">


                          <div className="info">
                            <div className="box-img">
                              <img src="/static/img/profile/friends.png" />
                            </div>
                            <div className="follower">
                              <h3>Friends</h3>
                              <span>1,000</span>
                            </div>

                          </div>
                          <div className="trending">
                            <img src="/static/img/profile/trend.png" /><span>8.5% </span> <p>Up from yesterday</p>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="box">


                          <div className="info">
                            <div className="box-img">
                              <img src="/static/img/profile/stores.png" />
                            </div>
                            <div className="follower">
                              <h3>Saved Stores</h3>
                              <span>1,000</span>
                            </div>

                          </div>
                          <div className="trending">
                            <img src="/static/img/profile/trend.png" /><span>8.5% </span> <p>Up from yesterday</p>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="box">


                          <div className="info">
                            <div className="box-img">
                              <img src="/static/img/profile/groups.png" />
                            </div>
                            <div className="follower">
                              <h3>Joined Groups</h3>
                              <span>1,000</span>
                            </div>

                          </div>
                          <div className="trending">
                            <img src="/static/img/profile/trend.png" /><span>8.5% </span> <p>Up from yesterday</p>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="charts">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-4 chart-1">
                      <div className="chart-container mt-12">
                        <h3>Order by Category</h3>
                        {/* <canvas id="myChart"></canvas> */}
                        {/* <Doughnut 
                          data={data} 
                          options={{ maintainAspectRatio: false }}
                        /> */}
                        <DoughnutChart />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="chart-container">
                        <h3>Analytics</h3>
                        <LineChart/>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className='statis text-center'>

                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="shop-text">
                        <div className="save-item">
                          <h4>Saved Items</h4>

                        </div>

                        <div className="see">
                          <a href="">See All</a>

                        </div>
                      </div>

                    </div>
                    <div className="col-md-2">
                      <div className="box">
                        <img src="/static/img/profile/shop1.png" />

                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="box ">
                        <img src="/static/img/profile/shop2.png" />



                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="box">
                        <img src="/static/img/profile/shop3.png" />



                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="box">
                        <img src="/static/img/profile/shop4.png" />



                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="box">
                        <img src="/static/img/profile/shop5.png" />



                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="box">
                        <img src="/static/img/profile/shop6.png" />



                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <section className="chrt3">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-9">
                  <div className="chart-container">
                    <canvas id="chart3" width="100%"></canvas>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box">
                  </div>
                </div>
              </div>
            </div>
          </section> */}

<section className="product-table table-responsive">
<div className="order-list">
  <div className="order-heading" >
    <h4>Order Details</h4>


  </div>

  <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  
</div>
  <div className="card card-bordered card-preview">
  <Table columns={columns} dataSource={data} />
  </div>

</section>
            </section>
    </Card>
  </div>
  

 
    </Col>
  </Row>
  </div>
     
    </>
  );
};


export default Profil;
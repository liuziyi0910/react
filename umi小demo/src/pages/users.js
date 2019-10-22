import React from 'react';
import ReactEcharts from "echarts-for-react";
import { Card} from 'antd';
const { Meta } = Card;
// import {dimValueGetter} from "echarts/src/component/marker/markerHelper";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  getOption = () =>{
    return {

        xAxis: {
          data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
        },
        yAxis: {},
        series: [{
          type: 'k',
          data: [
            [20, 30, 10, 35],
            [40, 35, 30, 55],
            [33, 38, 33, 40],
            [40, 40, 32, 42]
          ]
        }]


    }};
  render() {
    return (
      <div style={{ position:"relative" }}>
        <div style={{ position:"relative" ,float :"left",width:"1000px"}}>
          <ReactEcharts
          option={this.getOption()}
          style={{width: '100%',height:"600px" }}/></div>
      <div style={{ position:"fixed" ,right:"0px"}}>
        <Card
          hoverable
          style={{ width: 400 }}
          cover={<img alt="example" src="https://cn.bing.com/th?id=OIP.3jRh_7NVWMu1MnBHJaJkXwHaE8&pid=Api&rs=1" />}
        >
          <Meta title="股票走势" description="https://finance.sina.com.cn/stock/" />
        </Card>
      </div>
      </div>
    );
  }
}


export default User;

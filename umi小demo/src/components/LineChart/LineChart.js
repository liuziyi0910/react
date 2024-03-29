import React from 'react';
import ReactEcharts from "echarts-for-react";

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    let colerArr = ['#1890ff', '#2fc25b', '#facc14', '#223273', '#8543e0', '#13c2c2', '#3436c7', '#f04864'];
    this.colerArr = colerArr;
    this.state = {};

  }
  getOption = () =>{
    return {
      title: {
        text: ' '
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: { //需要对应 series 的 name值
        data:['天海湾','鼎龙湾','珍珠湾','翠逸家园','紫林湾']
      },
      color: this.colerArr,
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar']},
          // saveAsImage: {} //存取为图片
        }
      },

      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['10:00','11:00','12:00','13:00','14:00','15:00','16:00']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name:'天海湾',
          type:'line',
          stack: '总量',
          data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
          name:'鼎龙湾',
          type:'line',
          stack: '总量',
          data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
          name:'珍珠湾',
          type:'line',
          stack: '总量',
          data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
          name:'翠逸家园',
          type:'line',
          stack: '总量',
          data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
          name:'紫林湾',
          type:'line',
          stack: '总量',
          data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]

    }};
  render() {
    return (
      <ReactEcharts
        option={this.getOption()}
        notMerge={true}
        lazyUpdate={true}
        style={{width: '100%',height:"300px"}}/>
    );
  }
}

LineChart.propTypes = {};

export default LineChart;

import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import Line from "../components/Line/Line";
import { Row,Col} from 'antd';
import React from 'react';
import PieChart from "../components/Pie/PieChart"
import LineChart from "../components/LineChart/LineChart"
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
     <Row>
       <Col span={8}>
         <div  style = {{background:"white",marginBottom:"20px"}}>
           <PieChart></PieChart>
         </div>
         <div  style = {{background:"white"}}>
           <LineChart></LineChart>
         </div>

       </Col>
       <Col span={16}>
         <Line></Line>
       </Col>
     </Row>
    );
  }
}


export default Home;

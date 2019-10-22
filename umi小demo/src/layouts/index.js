import styles from './index.css';
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Home from "../pages/index"
import router from 'umi/router';
const { Header, Content, Footer } = Layout;

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nav:1
    };

  };
  doClick=(a,b) =>{
    this.setState({nav:a});
    router.push(b)
  };

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className={styles.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1" onClick={()=>this.doClick(1,"/")} >nav 1</Menu.Item>
            <Menu.Item key="2" onClick={()=>this.doClick(1,"/users")} >nav 2</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 40px' }} className={styles.container}>
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>phosphyphyllite</Footer>
      </Layout>
    );
  }
}

Index.propTypes = {};

export default Index;



// function BasicLayout(props) {
//
//   return (
//     <Layout className="layout">
//       <Header>
//         <div className={styles.logo} />
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           defaultSelectedKeys={['1']}
//           style={{ lineHeight: '64px' }}
//           onClick={this.handleClick}
//         >
//           <Menu.Item key="1" selectable="ture">nav 1</Menu.Item>
//           <Menu.Item key="2">nav 2</Menu.Item>
//         </Menu>
//       </Header>
//       <Content style={{ padding: '0 40px' }} className={styles.container}>
//         { props.children }
//       </Content>
//       <Footer style={{ textAlign: 'center' }}>phosphyphyllite</Footer>
//     </Layout>
//   );
// }
//
// export default BasicLayout;

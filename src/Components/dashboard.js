import React, { Component } from "react";
import { connect } from "react-redux";
import getData from "../modules/action";
import { Spin } from "antd";
import "./styles.css";
import { Table, Tag, Space } from "antd";

class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderLoader = () => {
    <div className="example">
      <Spin />
    </div>;
  };
  componentDidMount() {
    this.props.getData();
  }
  columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "PhoneNo",
      dataIndex: "phoneNo",
      key: "phoneNo",
    },
  ];

  createData = () => {
    const { data } = this.props;
    const renderedData = data.map((item, i) => {
      const { id, name, age, gender, email, phoneNo } = item;
      return {
        key: id,
        name,
        age,
        gender,
        email,
        phoneNo,
      };
    });
    return renderedData;
  };
  logout=()=>{
      localStorage.removeItem("token");
      this.props.history.push("/login");
  }
  render() {
    const isFetching = this.props.data ? false : true;
    console.log(".....", this.props.data);
    return (
      <div className="dashboard-container">
          <div className="header">
              <span>Dashboard</span>
              <span className="logout" onClick={this.logout}>Logout</span>
          </div>
        <Table
          columns={this.columns}
          dataSource={this.createData()}
          loading={isFetching}
          bordered

        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.loginReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(dashboard);

import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clickButton } from "../../actions";
import Header from "../Header/Header";
import List from "../List/List";


const Home = props => {

  return (
    <>
      <Header />
      <List/>
    </>
  );
};

// const mapStateToProps = store => ({
//   newValue: store.clickState.newValue
// });

// const mapDispatchToProps = dispatch => ({
//   clickButton: bindActionCreators(clickButton, dispatch)
// });
export default Home;

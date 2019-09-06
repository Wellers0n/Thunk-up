import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clickButton } from "../../actions";
import Title from "../Title/Title";
import Header from "../Header/Header";

const Home = props => {
  const { newValue, clickButton } = props;
  const [inputValue, setInputValue] = useState("");

  const inputChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Header />
    </>
  );
};

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch => ({
  clickButton: bindActionCreators(clickButton, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

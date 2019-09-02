import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clickButton } from "./../../actions";

const Home = props => {
  const { newValue, clickButton } = props;
  const [inputValue, setInputValue] = useState("");

  const inputChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App" style={{ paddingTop: "10px" }}>
      <input type="text" value={inputValue} onChange={inputChange} />
      <button onClick={() => clickButton(inputValue)}>Click me!</button>
      <h1>{newValue}</h1>
    </div>
  );
};

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>({
    clickButton: bindActionCreators(clickButton, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);

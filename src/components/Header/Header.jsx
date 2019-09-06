import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./Style";
import { connect } from "react-redux";
import FetchList from './../../actions/FetchList'
import { bindActionCreators } from "redux";


function ButtonAppBar(props) {
  const {FetchList, data, error, loading} = props
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        {console.log(data, error, loading)}
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            data-testid="title-header"
            variant="h6"
            className={classes.title}
          >
            Home
          </Typography>
          <Button onClick={FetchList} color="inherit" data-testid="button-search">
            Search list
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = store => ({
  data: store.FetchList.data,
  error: store.FetchList.error,
  loading: store.FetchList.loading

});

const mapDispatchToProps = dispatch => ({
  FetchList: bindActionCreators(FetchList, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonAppBar);

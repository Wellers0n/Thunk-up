import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import useStyles from './Style'

export default function Title(props) {
  const classes = useStyles();


  return (
    <Typography
      className={classes.root}
      align="center"
      component="h2"
      variant="h6"
      gutterBottom
    >
      <div data-testid="nome">{`${props.nome}'s Challenge`}</div>
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
  nome: PropTypes.string
};

Title.defaultProps = {
  nome: "Define name"
}

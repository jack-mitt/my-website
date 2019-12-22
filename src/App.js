import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import exStyles from './style.js';
import { withStyles } from "@material-ui/core/styles";
class MainPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.main}>
        <h3> 
            Jack Mittelmeier 
            University of Arizona

        </h3>

      </div>
    );
  }
}

export default withStyles(exStyles)(MainPage);

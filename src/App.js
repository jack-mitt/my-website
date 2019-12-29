import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import exStyles from './style.js';
import { withStyles } from "@material-ui/core/styles";
import Container from "./Container"
class MainPage extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { classes } = this.props;
    return(
      <div className={classes.main}>
        <Container className={classes.header}>
              <b>Jack Mittelmeier</b>
        </Container>
        <Container className={classes.about}>
        <p>
          I am currently a senior in computer science at the University of Arizona. I work at CyVerse Data Science where I create react 
          javascript components, API endpoints in Go Lang, and GUI / API regression tests for the Discovery Enironment.
          I have many interests beyond programming such as bouldering and reading that you can check out on the left.
        </p>
          
        </Container>
        <Container>
        <img 
            style = {{
              width: '25vw',
              height: '30vh',
              float: 'right',
              marginBottom: 25,
              objectFit: 'cover'
            }}
          src="/images/portrait.jpg"/>
          </Container>

        

      </div>
    );
  }
}

export default withStyles(exStyles)(MainPage);

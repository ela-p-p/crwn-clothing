import React from "react";
import Directory from '../../components/Directory/Directory'
import { HomePageContainer } from './HomePage.styles'

class Homepage extends React.Component {
  render() {
    return (
      <HomePageContainer className="homepage">
        <Directory />
      </HomePageContainer>
    );
  }
}

export default Homepage;

import React from "react";
import Directory from '../../components/Directory/Directory'
import "./HomePage.scss";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}

export default Homepage;

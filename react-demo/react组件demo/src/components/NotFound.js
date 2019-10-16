import React from 'react';
import '../App.css';

class NotFound extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
      };
     
    }

    render() {
      return (
        <div className="the_NotFound">
          <h1>404NotFound</h1>
        
        </div>
      );
    }
  }
  export default NotFound;

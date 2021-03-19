import React from 'react';
import axios from 'axios';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  
  componentDidMount() {
    axios.get(`https://605422ec45e4b30017292c59.mockapi.io/api/user`)
      .then(res => {
        let user = res.data;
        if (user.length > 0) {
          this.setState({ user: user[0] });
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <p>{this.state.user.full_name}</p>
      </div>
    );
  }
}

export default Index;
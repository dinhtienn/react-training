import React from 'react';
import {connect} from 'react-redux';
import {getUser} from '../../actions/User';

class Index extends React.Component {
  async componentDidMount() {
    await this.props.getUser();
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <p>{this.props.user.user.length > 0 ? this.props.user.user[0].full_name : 'None'}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
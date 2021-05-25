import React, { Component } from 'react';
import { connect } from 'react-redux'; 
class Users extends Component {

  render() {
    // debugger
    return (
      <div>
        {this.props.userCount} Users!
        <ul>
          {this.props.users.map(user => <li>{user.username}</li>)}
          
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // debugger
  return {users: state.users, userCount: state.users.length}
}


// connect this component to Redux
export default connect(mapStateToProps)(Users)

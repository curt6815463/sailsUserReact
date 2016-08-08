require('vendor/bootstrap.scss');
require('User/User.scss');

class UserList extends React.Component {
  constructor(props) {
    super(props);
    
  }
  getData(){
    this.props.callback("");
  }
  render() {
    return (
      <ul>
        

      </ul>
    );
  }
}

module.exports = UserList;

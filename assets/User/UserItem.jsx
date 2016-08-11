require('vendor/bootstrap.scss');
require('User/User.scss');
var UserDeleBtn = require("./UserDeleBtn")

class UserItem extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <li>{this.props.i},<UserDeleBtn id={this.props.id} setData={this.ajaxResetData}  callback={this.props.callback}/></li>
      
    );
  }
}

module.exports = UserItem;

require('vendor/bootstrap.scss');
require('User/User.scss');
var UserItem = require("./UserItem");

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.data.map((item) => {
            return <UserItem i={item.username} id={item.id} setData={this.ajaxResetData} callback={this.props.callback}/> 
          })}
        </ul>
      </div>
      
    );
  }
}

module.exports = UserList;

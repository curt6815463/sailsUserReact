require('vendor/bootstrap.scss');
require('User/User.scss');


class UserAddBtn extends React.Component {
  
  constructor(props) {
    super(props);
    this.createUser = this.createUser.bind(this);
  }
  createUser(){
    var username = this.refs.userInput.value;
    this.props.callback('create?username='+username);
    this.props.setData();
  }
  
  
  
  render() {
    return (
      <div>
        <h3>Add Btn</h3>
        <form>
          <input type="text" ref="userInput"></input>
          <input type="button" onClick={this.createUser}  value="送出表單"></input>
        </form>
      </div>
    );
  }
}

module.exports = UserAddBtn;

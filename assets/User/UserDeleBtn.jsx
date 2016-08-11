require('vendor/bootstrap.scss');
require('User/User.scss');


class UserDeleBtn extends React.Component {
  
  constructor(props) {
    super(props);
    this.deleUser = this.deleUser.bind(this);
  }
  deleUser(){
    this.props.callback('destroy?id=' + this.props.id);
    this.props.setData();
  }
  
  
  
  render() {
    return (
          <input type="button" onClick={this.deleUser}  value="刪除"></input>
        
    );
  }
}

module.exports = UserDeleBtn;

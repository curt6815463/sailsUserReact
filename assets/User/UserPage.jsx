require('vendor/bootstrap.scss');
require('User/User.scss');
var UserAddBtn = require('./UserAddBtn');
var UserList = require('./UserList');

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      userData : null
    }
    this.ajaxSendData = this.ajaxSendData.bind(this);
  }
  
  
  ajaxSendData(path){
    $.ajax({
      url : 'user/' + path,

      success: function(data) {
        this.setState({
          userData : data
        })
        
      },
      error:function(error){
        console.log(error);
      }
      
    })
  }
  
  render() {
    return (
      <div>
        <h1>User Page</h1>

        <UserAddBtn  callback={this.ajaxSendData}/>
      </div>
    );
  }
}

module.exports = UserPage;

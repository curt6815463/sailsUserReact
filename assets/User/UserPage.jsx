require('vendor/bootstrap.scss');
require('User/User.scss');
var UserAddBtn = require('./UserAddBtn');
var UserList = require('./UserList');

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      userData : []
    }
    this.ajaxSendData = this.ajaxSendData.bind(this);
    this.ajaxResetData = this.ajaxResetData.bind(this);
  }
  
  
  ajaxSendData(path){
    $.ajax({
      url : 'user/' + path,

      error:function(error){
        console.log(error);
      }
      
    })
  }
  
  ajaxResetData(){
    $.ajax({
      url : 'user/',

      success: function(data) {
        this.setState({
          userData : data
        })
      }.bind(this),
      error:function(error){
        console.log(error);
      }
      
    })
  }
  
  render() {
    return (
      <div>
        <h1>User Page</h1>
        <UserList data={this.state.userData} setData={this.ajaxResetData} callback={this.ajaxSendData}/>
        <UserAddBtn setData={this.ajaxResetData}  callback={this.ajaxSendData}/>
      </div>
    );
  }
}

module.exports = UserPage;

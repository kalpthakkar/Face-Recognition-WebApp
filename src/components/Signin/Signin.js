import React from 'react';
import SigninAttemptStatus from '../StatusInfo/SigninAttemptStatus';


class Signin extends React.Component {
  
  constructor(props) {
    super();
    this.state = {
      signInEmail: '', 
      signInPassword: '',
      NumberOfSigninFailed: 0
      // Using onEmailChange / onPasswordChange function,
      // email & password state can constantly be updated from onChange.
      // Used to further stringify it and pass on to the server for validation by the database 
    }
  }


/* Updates the form's user input state, using onChange event defined inside input tag element
***********************************************************************************/
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }
/***********************************************************************************/


/* Will be call by onClick event from signIn button
  Code duplicaton occurs in keyEnter function due to parameter pass on, 
  and declaration of function inside keyEnter function does'nt works.
***********************************************************************************/
  onSubmitSignIn = () => {
    // fetch('http://localhost:3001/signin', {   // Incase for testing on localhost
    fetch('https://shrouded-castle-17930.herokuapp.com/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
    .then(user => {
          if (user.id) {
            this.props.loadUser(user)
            this.props.onRouteChange('home');
          }
          else
          {
            /* this.setState function is Asynchronous, so actual operation is perfomed late 
               (visible in console.log 1 step late), but here while validating thing, to call it synchronously
               by using the below approach */
            this.setState({NumberOfSigninFailed: this.state.NumberOfSigninFailed + 1 }, function () {
            });
          }
    })
  }
/***********************************************************************************/


  /* 
  Learning Resourses (Key event): 
  https://codepen.io/Audiosyncrasy/pen/pQdpbJ
  https://css-tricks.com/snippets/javascript/javascript-keycodes/
  https://forum.freecodecamp.org/t/react-redux-adding-a-handler-for-enter-key-events/241151
  https://www.pluralsight.com/guides/how-to-enter-key-event-handler-on-a-react-bootstrap-input-component
***********************************************************************************/
  // Function: Submits the form on pressing Enter key. Used in last input element (password)
  keyEnter = (event) => {
    if (event.keyCode === 13 || event.which === 13 || event.key === "Enter") {   // Some browser use 'keyCode' and some uses 'which'
      if(this.state.NumberOfSigninFailed < 10)
      {
        // fetch('http://localhost:3001/signin', {                        // Incase for testing on localhost
        fetch('https://shrouded-castle-17930.herokuapp.com/signin', {     // Fetch from server for given input email|password
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({                          // Before sending, JOSN need to stringify the data to make it understandable by server. For more, Google: stringify vs parse in json
            email: this.state.signInEmail,
            password: this.state.signInPassword
          })
        })
        .then(response => response.json())                // To receive response back from the sever
        .then(user => {                                   // getting response for further operations. Here, 'user' is an optional name (i.e. it can also be kept anything else)
              if (user.id) {                              // If received any userId from the server (which is kept in database for every users), then response becomes true. Else we receive 400 status.
                this.props.loadUser(user)                 // Update user details into App.js by passing this 'user' response as an argument
                this.props.onRouteChange('home');         // After updating user-details into App.js, will be redirected to home page
              }
              else
              {
                /* this.setState function is Asynchronous, so actual operation is perfomed late 
                   (visible in console.log 1 step late), but here while validating thing, to call it synchronously
                   by using the below approach */
                this.setState({NumberOfSigninFailed: this.state.NumberOfSigninFailed + 1 }, function () {
                });
              }
        })
      }
    }
  }
/***********************************************************************************/


  /* Focus to next input field - Learning Resource:
  https://stackoverflow.com/questions/38577224/focus-on-next-field-when-pressing-enter-react-js/41406907
  Incase if it show's: TypeError: Cannot read property 'refs' of undefined. Here's the solution: 
  https://stackoverflow.com/questions/34298521/cannot-read-property-refs-of-null-react-error-react-js
***********************************************************************************/
  // Function: Handle key press to change focus to the next item (having reference = password)
  handleKeyPress(event){
    if(event.keyCode === 13 || event.which === 13 || event.key === "Enter"){
      this.refs.password.focus();
    }
  }
/***********************************************************************************/

  render() {
    return (
      <div>
        { this.state.NumberOfSigninFailed >= 10
        ? <center>
            <SigninAttemptStatus NumberOfSigninFailed = {this.state.NumberOfSigninFailed} />
          </center>
        : <div></div>
        }
        <div style={{width: 'auto', marginTop: '0.5px', marginRight: '1.5rem', marginLeft: '1.5rem', marginBottom: '1.5rem'}}  className="center .mh4">
        <article className="br4 ba b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 center mh4">
            <main className="pa4 black-80">
              <div className="measure">
                <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                  <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input
                      className="br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="email"
                      name="email-address"
                      id="email-address"
                      onChange={this.onEmailChange}
                      onKeyPress={this.handleKeyPress.bind(this)}
                      ref = 'email'
                    />
                  </div>
                  <div className="mv3" style={{marginBottom: '0px'}}>
                    <label className="db fw6 lh-copy f6">Password</label>
                    <input
                      className="b br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="password"
                      name="password"
                      id="password"
                      onChange={this.onPasswordChange}
                      onKeyPress={this.keyEnter}
                      ref = 'password'
                    />
                  </div>
                </fieldset>
                { (this.state.NumberOfSigninFailed > 0) && (this.state.NumberOfSigninFailed < 10)
                ? <SigninAttemptStatus NumberOfSigninFailed = {this.state.NumberOfSigninFailed} />
                : <div></div>
                }
                { this.state.NumberOfSigninFailed < 10
                ?  <div className="">
                      <input
                        className="b br2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                        type="submit"
                        value="Sign in"
                        onClick={this.onSubmitSignIn} />
                    </div>
                :   <div className="">
                      <input
                        className="f2 br3 ph3 pv2 input-reset ba2 b--red bg-black pointer f6 dib"
                        style={{color: 'white', marginTop: '6px'}}
                        type="submit"
                        value="Please try Later"
                        disabled
                        onClick={this.onSubmitSignIn} />
                    </div>
                }
                <div className="lh-copy mt3">
                  <p onClick={() => this.props.onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
                </div>
              </div>
            </main>
          </article>
          </div>
          <br/>
        </div>
    );
  }
}

export default Signin;
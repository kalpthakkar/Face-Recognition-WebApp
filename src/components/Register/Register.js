import React from 'react';
import './pendingValidation.css';

class Register extends React.Component {
  
constructor(props) {
  super();
  this.state = {
    name: '',
    email: '',
    password: '',
    isValidName: false,
    isValidEmail: false,
    PasswordHasCase: false,
    PasswordHasNumber: false,
    PasswordHasLength: false, 
    PasswordHasSpecialChar: false,
    NumberOfSubmitFailed: 0
    // Using onNameChange / onEmailChange / onPasswordChange function,
    // name, email & password state can constantly be updated from onChange.
    // Used to further stringify it and pass on to the server for validation by the database 
  }
}

/* Updates the form's user input state, using onChange event defined inside input tag element
***********************************************************************************/
onNameChange = (event) => { 
  // Using Regexp for client-side validation
  var patternSymbol = new RegExp(/[@$&!~:`%-+=/*^%[({<.>})\]|/\\#!?",_;'&]/i);
  var patternNumber = new RegExp(/(?=.*\d)/i);
  var patternAlphabet = new RegExp(/[a-zA-Z]/i);
  /* this.setState function is Asynchronous, so actual operation is perfomed late 
       (visible in console.log 1 step late), but here while validating thing, to call it synchronously
       by using the below approach */
  this.setState({name: event.target.value}, function () {
    if(this.state.name.length > 2) {
     if (!patternSymbol.test(this.state.name)) {
        if(!patternNumber.test(this.state.name)) {
          if (patternAlphabet.test(this.state.name)) {
            this.setState({isValidName: true})
          } else { this.setState({isValidName: false}) }
        } else { this.setState({isValidName: false}) }
      } else { this.setState({isValidName: false}) }
    } else { this.setState({isValidName: false}) }
  });
}

onEmailChange = (event) => {
var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  /* this.setState function is Asynchronous, so actual operation is perfomed late 
       (visible in console.log 1 step late), but here while validating thing, to call it synchronously
       by using the below approach */
  this.setState({email: event.target.value}, function () {
    if (!pattern.test(this.state.email)) 
    {
          this.setState({isValidEmail: false})
    }
    else
    {
      this.setState({isValidEmail: true})
    }
    // There exist another 2 methods by which an Email validation can be done.
    // Method 1: Using str methods : https://www.w3schools.com/jsref/jsref_obj_string.asp
    // Method 2: By using an API services 
    });
}

  onPasswordChange = (event) => {
    // RegExp for password: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    var patternIncludesOneCapitalChar = new RegExp(/[A-Z]/);
    var patternIncludesOneLowerChar = new RegExp(/[a-z]/);
    var patternIncludesNum = new RegExp(/[0-9]/);
    var patternIncludesSpecialChar = new RegExp(/[@$&!~:`%-+=/*^%[({<.>})\]|/\\#!?",_;'&]/);
    /* this.setState function is Asynchronous, so actual operation is perfomed late 
       (visible in console.log 1 step late), but here while validating thing, to call it synchronously
       by using the below approach */
    this.setState({password: event.target.value}, function () {

      //*************************************************************** Check 1:
      if(this.state.password.length >= 6) // Atleast 6
      {
        this.setState({PasswordHasLength: true})
      }
      else
      {
        this.setState({PasswordHasLength: false}) 
      }

      //*************************************************************** Check 2
      if(patternIncludesNum.test(this.state.password))
      {
        this.setState({PasswordHasNumber: true})
      }
      else
      {
        this.setState({PasswordHasNumber: false}) 
      }

      //*************************************************************** Check 3
      if(patternIncludesOneCapitalChar.test(this.state.password)) {
        if(patternIncludesOneLowerChar.test(this.state.password)) {
          this.setState({PasswordHasCase: true})
        } else { this.setState({PasswordHasCase: false}) }
      } else { this.setState({PasswordHasCase: false}) }

      //*************************************************************** Check 4
      if(patternIncludesSpecialChar.test(this.state.password))
      {
        this.setState({PasswordHasSpecialChar: true})
      }
      else
      {
        this.setState({PasswordHasSpecialChar: false}) 
      }

    });
  }
/***********************************************************************************/


/* Will be call by onClick event from signIn button
  Code duplicaton occurs in keyEnter function due to parameter pass on, 
  and declaration of function inside keyEnter function does'nt works.
***********************************************************************************/
onSubmitRegister = () => {
  if(this.state.isValidName && 
    this.state.isValidEmail && 
    this.state.PasswordHasCase && 
    this.state.PasswordHasNumber && 
    this.state.PasswordHasLength && 
    this.state.PasswordHasSpecialChar)
  {
    // fetch('http://localhost:3001/register', {    // Incase for testing on localhost
    fetch('https://shrouded-castle-17930.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.id)
      {
        this.props.loadUser(user)
        this.props.onRouteChange('home')
      }
    })
  }
  else  
  {
    /* this.setState function is Asynchronous, so actual operation is perfomed late 
       (visible in console.log 1 step late), but here while validating thing, to call it synchronously
       by using the below approach */
    this.setState({NumberOfSubmitFailed: this.state.NumberOfSubmitFailed + 1 }, function () {
    });
  }
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
      
      /****************************************/
      if(this.state.isValidName && 
        this.state.isValidEmail && 
        this.state.PasswordHasCase && 
        this.state.PasswordHasNumber && 
        this.state.PasswordHasLength && 
        this.state.PasswordHasSpecialChar)
      {
        // fetch('http://localhost:3001/register', {                        // Incase for testing on localhost
        fetch('https://shrouded-castle-17930.herokuapp.com/register', {     // Fetch from server for given input name|email|password
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({                        // Before sending, JOSN need to stringify the data to make it understandable by server. For more, Google: stringify vs parse in json
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
          })
        })
        .then(response => response.json())              // To receive response back from the sever
        .then(user => {                                 // getting response for further operations. Here, 'user' is an optional name (i.e. it can also be kept anything else)
          if(user.id)                                   // If received any userId from the server (which is kept in database for every users), then response becomes true. Else we receive 400 status.
          { 
            this.props.loadUser(user)                   // Update user details into App.js by passing this 'user' response as an argument
            this.props.onRouteChange('home')            // After updating user-details into App.js, will be redirected to home page
          }
        })
      }
      else
      {
        /* this.setState function is Asynchronous, so actual operation is perfomed late 
           (visible in console.log 1 step late), but here while validating thing, to call it synchronously
           by using the below approach */
        this.setState({NumberOfSubmitFailed: this.state.NumberOfSubmitFailed + 1 }, function () {
        });
      }
    }
  }
/***********************************************************************************/

  /* Focus to next input field - Learning Resource:
  https://stackoverflow.com/questions/38577224/focus-on-next-field-when-pressing-enter-react-js/41406907
  Incase if it show's: TypeError: Cannot read property 'refs' of undefined. Here's the solution: 
  https://stackoverflow.com/questions/34298521/cannot-read-property-refs-of-null-react-error-react-js
***********************************************************************************/
  // Function: Handle key press to change focus to the next item (name --handleKeyPress1--> email --handleKeyPress2--> password)
  handleKeyPress1(event){
    if(event.keyCode === 13 || event.which === 13 || event.key === "Enter"){
      this.refs.email.focus();
    }
  }
  handleKeyPress2(event){
    if(event.keyCode === 13 || event.which === 13 || event.key === "Enter"){
      this.refs.password.focus();
    }
  }
/***********************************************************************************/

  render() {
    return (
      <div style={{width: 'auto', marginTop: '0.5px', marginRight: '1rem', marginLeft: '1rem', marginBottom: '1.5rem'}}  className="center .mh4">
      <article className="br4 ba b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 center mh4">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange = {this.onNameChange}
                  onKeyPress={this.handleKeyPress1.bind(this)}
                  ref = 'name'
                />
                { (this.state.NumberOfSubmitFailed > 0)
                ?   (this.state.isValidName === true)
                    ?   <div> </div>
                    :   <div style={{display: 'flex', flexWrap: 'nowrap', textAlign: 'left', margin: '2px'}}>
                          <div style={{marginRight: '0px'}}><div className="spinner container"></div></div>
                          <div style={{paddingTop: '2px', textAlign: 'left', color: 'white'}} className="f5">
                            <p style={{marginTop: '0px', marginBottom: '0px', textAlign: 'left', marginLeft: '10px'}}>
                              Please Enter a valid name
                            </p>
                          </div>
                        </div>
                    
                :   <div></div>
                }
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 br2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onKeyPress={this.handleKeyPress2.bind(this)}
                  onChange = {this.onEmailChange}
                  ref = 'email'
                />
                { this.state.NumberOfSubmitFailed > 0
                ?    this.state.isValidEmail === true
                    ?   <div> </div>
                    :   <div style={{display: 'flex', flexWrap: 'nowrap', textAlign: 'left', margin: '2px'}}>
                          <div style={{marginRight: '0px'}}><div className="spinner container"></div></div>
                          <div style={{paddingTop: '2px', textAlign: 'left', color: 'white'}} className="f5">
                            <p style={{marginTop: '0px', marginBottom: '0px', textAlign: 'left', marginLeft: '10px'}}>
                              Enter an email address of valid format
                            </p>
                          </div>
                        </div>
                    
                :   <div></div>
                }
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange = {this.onPasswordChange}
                  onKeyPress={this.keyEnter}
                  ref = 'password'
                />
                { this.state.NumberOfSubmitFailed > 0
                ?    this.state.PasswordHasLength === true
                    ?   <div> </div>
                    :   <div style={{display: 'flex', flexWrap: 'nowrap', textAlign: 'left', margin: '2px'}}>
                          <div style={{marginRight: '0px'}}><div className="spinner container"></div></div>
                          <div style={{paddingTop: '2px', textAlign: 'left', color: 'white'}} className="f5">
                            <p style={{marginTop: '0px', marginBottom: '0px', textAlign: 'left', marginLeft: '10px'}}>
                              password length must be atleast 6
                            </p>
                          </div>
                        </div>
                    
                :   <div></div>
                }
                { this.state.NumberOfSubmitFailed > 0
                ?    this.state.PasswordHasNumber === true
                    ?   <div> </div>
                    :   <div style={{display: 'flex', flexWrap: 'nowrap', textAlign: 'left', margin: '2px'}}>
                          <div style={{marginRight: '0px'}}><div className="spinner container"></div></div>
                          <div style={{paddingTop: '2px', textAlign: 'left', color: 'white'}} className="f5"><p style={{marginTop: '0px', marginBottom: '0px', textAlign: 'left', marginLeft: '10px'}}>include any number (0-9)</p></div>
                        </div>
                    
                :   <div></div>
                }
                { this.state.NumberOfSubmitFailed > 0
                ?    this.state.PasswordHasCase === true
                    ?   <div> </div>
                    :   <div style={{display: 'flex', flexWrap: 'nowrap', textAlign: 'left', margin: '2px'}}>
                          <div style={{marginRight: '0px'}}><div className="spinner container"></div></div>
                          <div style={{paddingTop: '2px', textAlign: 'left', color: 'white'}} className="f5">
                            <p style={{marginTop: '0px', marginBottom: '0px', textAlign: 'left', marginLeft: '10px'}}>
                              lower & upper Case
                            </p>
                          </div>
                        </div>
                    
                :   <div></div>
                }
                { this.state.NumberOfSubmitFailed > 0
                ?    this.state.PasswordHasSpecialChar === true
                    ?   <div> </div>
                    :   <div style={{display: 'flex', flexWrap: 'nowrap', textAlign: 'left', margin: '2px'}}>
                          <div style={{marginRight: '0px'}}><div className="spinner container"></div></div>
                          <div style={{paddingTop: '2px', textAlign: 'left', color: 'white'}} className="f5">
                            <p style={{marginTop: '0px', marginBottom: '0px', textAlign: 'left', marginLeft: '10px'}}>
                              atleast one special character (@,&,*,#,...)
                            </p>
                          </div>
                        </div>
                    
                :   <div></div>
                }
              </div>
            </fieldset>
            <div className="">
              <input
                className="b br2 ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib"
                type="submit"
                value="Register"
                onClick= {this.onSubmitRegister}
              />
            </div>
          </div>
        </main>
      </article>
      </div>
    );
  }
}

export default Register;
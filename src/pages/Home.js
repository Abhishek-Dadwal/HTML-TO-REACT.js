import React, {Component} from 'react';
class Home extends Component {
    render() {
	    return (
		<div className="row ">
	           <div className="medium-12 columns">

                   <form action="user.html">
  <div class="cont">
    <div class="form login">
      <h2>Welcome</h2>
      <label>
        <span>Email Address</span>
        <input id="username"type="email" name="email" required/>
      </label>
      <label>
        <span>Password</span>
        <input id="password" type="password" name="password" required/>
      </label>
      <input class="button" onclick="getInfo()" type="submit" value="Login"></input>

    </div>
	<form/>

    <div class="sub-cont">
      <div class="img">
        <div class="img-text m-up">
          <h2>New here?</h2>
          <p>Register and discover great amount of new opportunities!</p>
        </div>
        <div class="img-text m-in">
          <h2>One of us?</h2>
          <p>If you already has an account, just Login. We've missed you!</p>
        </div>
        <div class="img-btn">
          <span class="m-up">Register</span>
          <span class="m-in">Login</span>
        </div>
      </div>

			<form>
      <div class="form register">
        <h2>Let's Join Hands together!</h2>
        <label>
          <span>Name</span>
          <input type="text" required/>
        </label>
        <label>
          <span>Email</span>
          <input type="email" required/>
        </label>
        <label>
          <span>Password</span>
          <input type="password" id="pswd1" required/>
        </label>
        <label>
          <span>Confirm Password</span>
          <input type="password" id="pswd2" required/>
        </label>
        <input class="button" onclick="matchPassword()" type="submit" value="Register Now"></input>
        <input class="button" type="reset" value="Reset"/>
			</div>
		  </form>

    </div>
  </div>
  </form>


        </div>
        </div>
        );
    }
}
export default Home;

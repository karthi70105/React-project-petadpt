import React from 'react';
function Login(){
  return (
    <body>
    <div className="form-container">
      <form>
        <h1>Login</h1>
      <label>UserName </label>
      <input type='text'/>
      <br></br>
      <label>PassWord </label>
      <input type='password'/>
      <br></br>
      <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>
    </body>
  );
}
export default Login;
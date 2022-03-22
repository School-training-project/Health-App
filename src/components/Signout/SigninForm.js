import React from 'react';
import './signform.css';
const Signin = () => {
    return (
        <form>
        
        <div className="form-group" >
            
            
             
            <input type="email" className="form-control" placeholder="Enter email" required/>
        
            <br/>
            
            <input type="password" className="form-control" placeholder="Enter password"  required />
            <br/>
            
          <button type="submit" className="signbutton">SIGN IN</button>
    </div>
    </form>
    )
};
export default Signin;
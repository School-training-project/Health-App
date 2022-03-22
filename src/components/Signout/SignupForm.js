import React from 'react';
import './signform.css';
const Signup=()  => {
    return (
        <form>
        
        <div className="form-group" >
            
            <input type="text" className="form-control" placeholder="First name"  required />
        <br/>
            
            <input type="text" className="form-control" placeholder="Last name"  required/>
        
            <br/>
             
            <input type="email" className="form-control" placeholder="Enter email" required />
        
            <br/>
            
            <input type="password" className="form-control" placeholder="Enter password"  required/>
            <br/>
            
          <button type="submit" className="signbutton">SIGN UP</button>
    </div>
    </form>
    )
};
export default Signup;
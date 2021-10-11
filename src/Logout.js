import React from 'react'
import Button from '@material-ui/core/Button'


export default function Logout() {
    function handleLogOut( setIsAuth) {
        localStorage.clear();
        setIsAuth(false);
      }
    
    return (
        <div className="containerr">
            <form class="form-inline pt-3">
         <button className='butonflex' onClick={handleLogOut}> Log out </button>

         
         </form>
          </div>
    )
}

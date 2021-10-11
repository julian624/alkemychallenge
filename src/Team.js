
import React, { useState, useEffect } from 'react';

export default function Team(props) {
  
   const {user}=props
  
    return (
        <div>
        <ul>
         
          <li key={user.uid}>{user.name}</li>
  
        
        </ul>
            
        </div>
    )
}

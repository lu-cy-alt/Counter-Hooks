import React, { useState } from 'react';


function Counter() {
    const [count, setCount] = useState(0);

    function handleStatusCount(status) {
      setCount(status.target.value)
    }
    
    return (
        <div>
          <p>Number</p>
          <input value={count}onChange={handleStatusCount}/>
        </div>
      )
    }
    
    export default Counter;

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
          <button onClick={() => setCount(count + 1)}>
          +1
        </button>
        <button onClick={() => setCount(count - 1)}>
          -1
        </button>
        </div>
      )
    }
    
    export default Counter;

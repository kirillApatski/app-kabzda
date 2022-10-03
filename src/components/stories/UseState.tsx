import React, {useState} from "react";

function generateData () {
    return 1
}

export const Example2 = () => {
    const [count, setCount] = useState(generateData)
    
    return (
        <>
            <button onClick={() => setCount( state => state + 1) }>Click</button>
            {count}
        </>
    )
}
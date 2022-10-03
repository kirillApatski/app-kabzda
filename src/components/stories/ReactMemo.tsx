 import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const Counter = (props: any) => {
    return <div>{props.count}</div>
}

const UserSecret = (props: { users: Array<string> }) => {
    console.log('THIS USERS')
    return <div>{props.users.map((u, i) =>
        <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UserSecret)


export const Example1 = () => {
    const [count, setCount] = useState(0)
    const [people, setPeople]  = useState(['Andrei', 'Dima', ' Kolya'])

    return (
        <>
            <button onClick={() => setCount( count + 1) }>Click</button>
            <Counter count={count}/>
            <Users users={people}/>
        </>
    )
}
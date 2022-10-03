import React, {useMemo, useState} from 'react';

export const DifficultCountingExample = () => {
    console.log('render useMemo')
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++
                Math.random();
            }
            tempResultA *= i
        }
        return tempResultA

    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a : {resultA}
            </div>
            <div>
                Result for b : {resultB}
            </div>


        </div>
    );
};

const Counter = (props: any) => {
    return <div>{props.count}</div>
}

const UserSecret = (props: { users: Array<string> }) => {
    console.log('UserSecret')
    return <div>{props.users.map((u, i) =>
        <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UserSecret)


export const HelpsReactMemo = () => {
    const [count, setCount] = useState(0)
    const [people, setPeople] = useState(['Andrei', 'Dim', ' Kolya'])

    const newArray = useMemo(() => {
        return people.filter(p => p.toLowerCase().indexOf('a') > -1)
    }, [people])

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Click</button>
            {count}
            <Users users={newArray}/>
        </>
    )
}
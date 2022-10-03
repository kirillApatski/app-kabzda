import {userReducer} from "./use-reducer";
import exp from "constants";

test('user reducer should increment only age', () => {
    const startState = {age: 20, childrenCount: 2, name: 'Andrei'};

    const endState = userReducer(startState, {type: 'INCREMENT-AGE'})
    expect(endState.age).toBe(21);
    expect(endState.childrenCount).toBe(2)
});

test('user reducer should increment only childrenCount', () => {
    const stateStart = {age: 20, childrenCount: 2, name: 'Dima'};

    const endStart = userReducer(stateStart, {type: 'INCREMENT-CHILDREN-COUNT'})

    expect(endStart.childrenCount).toBe(3)
    expect(endStart.age).toBe(20)
})
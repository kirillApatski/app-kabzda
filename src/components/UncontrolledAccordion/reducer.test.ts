import React from "react";
import {userReducer} from "../state/use-reducer";
import {reducer} from "./reducer";
import {text} from "stream/consumers";

test('chek status collapset', () => {
    const stateCollpas = { collapsed: false}

  const endState = reducer(stateCollpas, {type: 'TOGGLE-COLLAPSED'})

    expect(endState.collapsed).toBe(true)

})

test('check in errors', () => {
    const stateCollpas = { collapsed: false}

    expect(() => {
        reducer(stateCollpas, {type: 'abrakadabra'})
    }).toThrow()
})
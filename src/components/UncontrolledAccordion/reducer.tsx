export type AccardionPropsType = {
    titleValue: string
}
type ActionType = {
    type: string
}

type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED' :
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default :
            throw new Error('bad action')
    }
    return state
}
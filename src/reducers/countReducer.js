const initialState = {
    data: 0,
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, {
                data: (state.data + 1),
            });
        case 'DECREMENT':
            return Object.assign({}, state, {
                data: (state.data - 1),
            });
        default:
            return state;
    }
}

export default reducer;
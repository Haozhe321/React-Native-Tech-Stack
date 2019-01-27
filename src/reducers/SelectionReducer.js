//state is the last state returned from the reducer
//return null when starting up
export default(state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};

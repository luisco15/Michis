export const initialState = {
    user: /*{displayName:'Megumin',
    photoURL: 'https://i.pinimg.com/736x/fa/53/b1/fa53b16145fbcdbb62249ef20bcbab12.jpg'
}*/null
};

export const actionTypes = {
    SET_USER: "SET_USER"
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};

export default reducer;
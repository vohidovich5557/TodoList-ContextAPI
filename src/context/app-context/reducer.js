export const appReducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "ADD":
            return {...state, users: [...state.users, action.payload]};
        case "DELETE":
            const newMessage = state.users.filter((item) => item.id !== action.payload.id);
            return {...state, users: newMessage};
        case "EDIT":
            return {...state, users:state.users.map((item) => item.id === action.payload.id ? action.payload : item)}
        default:
            return state;
    }
}
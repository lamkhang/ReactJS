import * as ActionType from "./../constants/actionType";
export const actionOnDelete = id =>{
    return {
        type: ActionType.DELETE_USER,
        id
    }
};
export const actionEditUser = user =>{
    return {
        type: ActionType.EDIT_USER,
        user
    }
}
export const actionSaveUser = user =>{
    return{
        type: ActionType.SAVE_USER,
        user
    }
}
export const actionFilter = keyWord =>{
    return{
        type: ActionType.FILTER,
        keyWord
    }
}
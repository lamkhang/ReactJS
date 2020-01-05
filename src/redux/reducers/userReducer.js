import * as ActionType from "./../constants/actionType";

let initState = {
    userList: [
        {
            id: 1,
            name: "Dinh Phuc Nguyen",
            username: "dpnguyen",
            email: "dpnguyen@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP"
        },
        {
            id: 2,
            name: "Nguyen Dinh Phuc",
            username: "nguyendp",
            email: "nguyendp@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP"
        }
    ],
    userEdit: null,
    keyWord: ""
}
// const timVitri = (id) => {
//     return this.initState.userList.findIndex(item => {
//         return item.id === id
//     })
// }
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.DELETE_USER:
            let userList = [...state.userList];
            let index = userList.findIndex(item => {
                return item.id === action.id
            })
            userList.splice(index, 1);
            state.userList = userList;
            return { ...state };

        case ActionType.SAVE_USER:
            if (action.user.id) {
                // UPDATE
                let userList = [...state.userList];
                let index = userList.findIndex((item) => {
                    return action.user.id === item.id;
                });
                // console.log(index);

                if (index !== -1) {
                    // state.userList[index] = action.user;
                    userList[index] = action.user;
                    state.userList = userList;
                }
                //         let userList = [...this.state.userList];
                //         if(index !== -1){
                //             userList[index] = user;
                //         }
            }
            else {
                // ADD
                // let user = { ...action.user }
                action.user.id = Math.random();
                // state.userList = [...state.userList, user];
                state.userList = [...state.userList, action.user];
            }
            return { ...state };

        case ActionType.EDIT_USER:
            state.userEdit = action.user;
            return { ...state }
        case "FILTER":

            state.keyWord= action.keyWord;
        default:
            return { ...state };
    }
}
export default userReducer;
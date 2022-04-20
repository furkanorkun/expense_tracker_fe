export interface User {
    message: string;
    username: string;
    email: string;
    full_name: string;
    token: string;
}

export interface UserState {
    data: User,
    loading: boolean,
    error: string; 
}

interface LOGIN_START {
   type: "LOGIN_START" 
}

interface LOGIN_SUCCESSS {
    type: "LOGIN_SUCCESSS",
    payload: User 
 }

interface LOGIN_ERROR {
    type: "LOGIN_ERROR"
 }

 export type UserAction = LOGIN_START | LOGIN_SUCCESSS | LOGIN_ERROR;
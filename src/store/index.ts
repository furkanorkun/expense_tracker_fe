//Bu dosya ile API'deki 3 entity için Users, Records, Categories için 3 farklı reducer oluşturacağız ve combineReducers ile store'a bağlayacağız.
//Daha sonra redux'ın Provider componenti ile sararak tüm yerlerden bu üç verilere ulaşılmasını sağlayacağız.

import { combineReducers } from "redux";
import { UserState } from "../types/user";
import userReducer from "./reducers/userReducer";

interface AppState {
    user: UserState,
    categories: any,
    records: any
}

const rootReducer = combineReducers<AppState>({
    //Bunlar global state içerisinde tutulacak key'ler.
    user: userReducer,
    categories: () => {},
    records: () => {},
})

export default rootReducer;
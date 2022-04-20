//Reducer bir fonksiyondur.
//State ve action parametresi alır. Her zaman state'i döndürür.

import { User, UserAction, UserState } from "../../types/user";

const defaultState: UserState = {
    //Başlangıçta boş obje verildiğinde türü User olmadığı için hata veriyor. Bu nedenle as ile boş objenin User olduğunu bildiriyoruz.
    data: {} as User,
    loading: false,
    error: ""
}

const userReducer = (state:UserState = defaultState, action:UserAction) => {
    return state
}

export default userReducer;
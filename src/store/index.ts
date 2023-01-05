import {InjectionKey} from 'vue'
import {createStore, Store} from 'vuex'
import { Nav, User} from "../types";


export interface State {
    user: User,
    navIndex: string,
    navs: Array<Nav>,
}


export const StateKey: InjectionKey<Store<State>> = Symbol();


export const SET_USER = 'setUser';
export const CLEAR_USER = 'clearUser'
export const SET_NAV_INDEX = 'setNavIndex'


export const initDefaultUserInfo = (): User => {
    let user: User = {
        id: 0,
        username: "",
        avatar: "",
        email: '',
        nickname: '',
        is_superuser: false,
    }
    if (window.sessionStorage.userInfo) {
        user = JSON.parse(window.sessionStorage.userInfo);
    }
    return user
}



export const store = createStore<State>({
    state() {
        return {
            user: initDefaultUserInfo(),
            navIndex: '1',
            navs: [
                {
                  index: "1",
                  path: "/",
                  name: "主页",
                },
                {
                  index: "2",
                  path: "/catalog",
                  name: "分类",
                },
                {
                  index: "3",
                  path: "/archive",
                  name: "归档",
                },
                {
                  index: "4",
                  path: "/message",
                  name: "留言",
                },
                {
                  index: "5",
                  path: "/about",
                  name: "关于",
                },
              ],
        }
    },
    mutations: {
        setUser(state: object | any, userInfo: object | any) {
            for (const prop in userInfo) {
                state[prop] = userInfo[prop];
            }
        },
        clearUser(state: object | any) {
            state.user = initDefaultUserInfo();
        },

        setNavIndex(state: object | any, navIndex: string) {
            state.navIndex = navIndex
        },
    },
})

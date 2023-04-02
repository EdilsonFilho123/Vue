import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $cookies } from '@/utils/nuxt-instance';
import { UserProps, users } from '@/data';

@Module({
    name: 'users',
    stateFactory: true,
    namespaced: true,
})

export default class Users extends VuexModule {
    private users = [] as UserProps[]
    private user = {} as UserProps
    private userLogged = {} as UserProps

    public get $all() {
        return this.users
    }

    public get $single() {
        return this.user
    }

    public get $loggedUser() {
        return this.userLogged
    }

    @Mutation
    private SET_ALL(data: UserProps[]){
        this.users = data
    }

    @Mutation
    private SET_SINGLE(data: UserProps){
        this.user = data
    }

    @Mutation
    private SET_LOGGED_USER(data: UserProps){
        this.userLogged = data
    }

    @Action 
    public index() {
        this.context.commit('SET_ALL', users);
    }

    @Action
    public create(payload: UserProps) {
        this.context.commit('SET_SINGLE', payload)
    } 

    @Action
    public upload(payload: UserProps) {
        this.context.commit('SET_SINGLE', payload)
    } 

    @Action
    public destroy() {
        this.context.commit('SET_SINGLE', null)
    } 

    @Action
    public verify() {
        this.context.commit('SET_LOGGED_USER', $cookies.get("token") ? $cookies.get("user") : null);
        // console.log($cookies.get("token") ? $cookies.get("user") : null)
    } 
}
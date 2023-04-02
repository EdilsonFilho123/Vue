/* eslint-disable array-callback-return */
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $cookies } from '@/utils/nuxt-instance'
import { users } from '@/data'

type Token = string | null;

interface Payload {
    email: string
    password: string
}

@Module({
    name: 'auth',
    stateFactory: true,
    namespaced: true,
})

export default class Auth extends VuexModule {
    private token = '' as Token

    public get $token() {
        return this.token
    }

    @Mutation
    private UPDATE_TOKEN(data: Token){
        this.token = data
    }

    @Action
    public setAuth({email, password}: Payload) {
        const user = users.filter((user) => {
            if (user.email.toLocaleLowerCase() === email.toLocaleLowerCase()) return  user;
        })[0];

        if(!user) return

        const accessToken = `${email}-${password}-token`;

        $cookies.set('token', accessToken, {
            path: '/',
            maxAge: 60 * 60 * 24 * 30, // 30 dias de validade
        })

        $cookies.set('user', user)
        // this.context.commit('UPDATE_TOKEN', accessToken)
    } 

    @Action
    public update() {
        const token = $cookies.get('token') || null
        this.context.commit('UPDATE_TOKEN', token)
    }

    @Action
    public destroy() {
        $cookies.remove('user')
        $cookies.remove('token')
        this.context.commit('UPDATE_TOKEN', null)
    }
}
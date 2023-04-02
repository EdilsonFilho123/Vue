<template>
    <v-card rounded="xl" class="pa-8" min-width="500">
        <v-card-title> Faça seu login </v-card-title>
        <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="sigIn">
                <v-text-field v-model="email" placeholder="seuemail@gmail.com" type="email" label="Email" :rules="[ verificaEmail ]" />
                <v-text-field v-model="password" placeholder="digite sua senha" type="password" label="Senha" :rules="[ verificaSenha ]" />
                <v-btn color="success" type="submit" class="mt-8">
                    <v-icon>mdi-login</v-icon>
                    acessar
                </v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { auth, users } from '@/store'
    import { VForm } from '@/modules'

    export default Vue.extend({
        data: () => ({
            valid: true,
            email: '',
            password: '',
        }),

        computed: {
            form(): VForm {
                return this.$refs.form as VForm;
            }
        },

        methods: {
            async sigIn(){
                if(!this.form.validate()) return 

                auth.setAuth({email: this.email, password: this.password})
                users.verify();

                this.form.resetValidation()

                if (!users.$loggedUser) {
                    alert('Email ou senha estão incorretos');
                    return
                }

                await this.$router.push('/dashboard')
            },
            verificaEmail(value: string){
                // alert(value);
                const emailRegex = (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi);
                return emailRegex.test(value) ? true : 'Email inválido!'
            },
            verificaSenha(value: string){
                // alert(value);
                return value.length > 6 ? true : 'Senha deve conter mais que 6 digitos!'
            }
        },
    })
</script>
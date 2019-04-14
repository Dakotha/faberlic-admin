<template>
    <div class="login">
        <form class="login-form" @submit.prevent="login">
            <!-- <h3>Uśmiechnij się</h3> -->
            <!-- <i class="far fa-smile"></i> -->

            <div class="login-form__error">{{ errorMessage }}</div>
            
            <input type="text" id="email" v-model="email" placeholder="Email">
            
            <input type="password" id="password" v-model="password" placeholder="Hasło">
            
            <button type="submit">Zaloguj</button>
        </form>
    </div>
</template>

<script>
import axios from '../axios'

export default {
    data () {
        return {
            email: '',
            password: '',
            errorMessage: ''
        }
    },
    methods: {
        login () {
            axios.post('/login', { email: this.email, password: this.password })
                .then(res => {
                    this.$store.commit('login', res.data)
                    this.$router.replace('/')
                })
                .catch(err => {
                    this.errorMessage = 'Nie udało się zalogować.'
                    console.log(err)
                })
        }
    }
}
</script>

<style lang="scss">
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: hidden;
}

.login-form {
    display: flex;
    flex-direction: column;
    padding: 5rem;
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 4px 4px 1rem rgba(0, 0, 0, .1);

    &__error {
        text-align: center;
        color: #C44900;
    }

    h3 {
        margin: 2rem;
        font-size: 3.5rem;
        text-align: center;
        color: #7798AB;
    }

    i {
        margin-bottom: 4rem;
        font-size: 6rem;
        text-align: center;
        color: #7798AB;
    }

    input {
        margin: 2rem;
        padding: 1rem;
        font-size: 1.6rem;
        color: #627D8C;
        border: none;
        border-bottom: 1px solid #9CB4C1;
        outline: none;

        &::placeholder {
            color: #9CB4C1;
        }
    }

    button {
        margin: 2rem;
        padding: 1.5rem 0;
        color: #fff;
        background-color: #41535E;
        border: none;
        border-radius: .5rem;
        cursor: pointer;
        outline: none;
    }
}
</style>

<template>
    <div class="login">
        <h2>Log in to Trello</h2>
        <form @submit.prevent="onSubmit">
        <div>
            <label for="email">Email</label>
            <input class="form-control" type="text" name="email" 
            v-model="email" autofocus placeholder="e.g., test@test.com" />
        </div>
        <div>
            <label for="password">Passwrod</label>
            <input class="form-control" type="password" 
            v-model="password" placeholder="123123" />
        </div>
        <button  class="btn" :class="{'btn-success': !invalidForm}" type="submit" 
            :disabled="invalidForm">Log In</button>
        </form>
        <p class="error" v-if="error">{{error}}</p>
    </div>
</template>
  
<script>
import {auth, setAuthInHeader} from '../api'

export default {
    data() {
        return {
            email: '',
            password: '',
            returnPath: '',
            error: '',
            rPath: ''
        }
    },
    computed: {
        invalidForm() {
            return !this.email || !this.password
        }
    },
    created() {
        this.rPath = this.$route.query.rPath || '/'
    },
    methods: {
        onSubmit() {
            auth.login(this.email, this.password)
                .then(data => {
                    // 받은 토큰값을 로컬 스토리지에 저장
                    localStorage.setItem('token', data.accessToken)
                    // 받은 토큰값을 axios의 Request Header의 Authorization에 설정
                    setAuthInHeader(data.accessToken)
                    // 쿼리 스트링에 있는 rPath(return Path)로 리다이렉트
                    this.$router.push(this.rPath)
                })
                .catch(err => {
                    this.error = err
                })
        }
    }
}
</script>
  
<style>
.login {
    width: 400px;
    margin: 0 auto; 
}
.error {
    color: #f00;
}
</style>
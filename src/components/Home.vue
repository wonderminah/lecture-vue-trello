<template>
    <div>
        Home
        <div>
            Board List:
            <div v-if="loading">loading...</div>
            <div v-else>API result: {{ apiRes }}</div>
            <div v-if="error">{{ error }}</div>
            <ul>
                <li>
                    <router-link to="board/1">Board 1</router-link>
                </li>
                <li>
                    <router-link to="board/2">Board 2</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            loading: false,
            apiRes: ''
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.loading = true

            axios.get('http://localhost:3000/health')
            .then(res => {
                this.apiRes = res.data
            })
            .catch(res => {
                this.error = res.response.data
            })
            .finally(() => {
                this.loading = false
            })
        }
    }
}
</script>

<style>

</style>
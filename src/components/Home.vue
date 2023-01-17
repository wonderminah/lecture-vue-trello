<template>
    <div>
        Home
        <div>
            Board List:
            <div v-if="loading">loading...</div>
            <div v-else>
                API result: {{ apiRes }}
            </div>
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
            const req = new XMLHttpRequest()
            req.open('GET', 'http://localhost:3000/health')
            // 완료되면 load라는 이벤트가 발생한다.
            req.send() 
            // 그 load 이벤트를 여기서 잡는다.
            req.addEventListener('load', () => { 
                this.loading = false
                this.apiRes = {
                    status: req.status,
                    statusText: req.statusText,
                    response: JSON.parse(req.response)
                }
            })
        }
    }
}
</script>

<style>

</style>
<template>
    <div>
        Home
        <div>
            Board List:
            <div v-if="loading">loading...</div>
            <div v-else>
                <div v-for="b in boards" :key="b.id">
                    {{ b }}
                </div>
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
import {board} from '../api'

export default {
    data() {
        return {
            loading: false,
            boards: [],
            error: ''
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.loading = true

            board.fetch()
                .then(data => {
                    this.boards = data
                })
                .finally(_=> {
                    this.loading = false
                })
        }
    }
}
</script>

<style>

</style>
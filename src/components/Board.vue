<template>
    <div>
        Board
        <div v-if="loading">
            loading board...
        </div>
        <div v-else>
            <div>bid: {{ bid }}</div>
            <router-link :to="`/board/${bid}/card/1`">Card 1</router-link>
            <router-link :to="`/board/${bid}/card/2`">Card 2</router-link>
        </div>
        
        <hr />
        <router-view></router-view> <!-- Card 컴포넌트는 여기에서 불린다. -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            bid: 0,
            loading: false
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.loading = true
            setTimeout(() => {
                this.bid = this.$route.params.bid
                this.loading = false
            }, 500)
        }
    }
}
</script>

<style>

</style>
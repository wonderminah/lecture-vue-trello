<template>
    <div>
        Card
        <div v-if="loading">
            Loading Card...
        </div>
        <div v-else>
            <div>cid: {{ cid }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cid: 0,
            loading: false
        }
    },
    watch: {
        '$route': {
            handler: 'fetchData',
            immediate: true
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            this.loading = true
            setTimeout(() => {
                this.cid = this.$route.params.cid
                this.loading = false
            }, 500)
        }
    }
}
</script>

<style>

</style>
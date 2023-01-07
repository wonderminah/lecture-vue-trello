<template>
    <div>
        Card
        <div>cid: {{ cid }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cid: 0
        }
    },
    watch: {
        '$route'() {
            this.cid = this.$route.params.cid // created 이후 cid가 바뀌면 갱신되도록.
        }
    },
    created() {
        this.cid = this.$route.params.cid
    }
}
</script>

<style>

</style>
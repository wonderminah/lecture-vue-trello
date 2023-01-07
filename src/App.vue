<template>
  <div id="app">
    <a href="/">Home</a>
    <a href="/login">Login</a>
    <!-- vue-router에 따라 라우터에 의해서 컴포넌트로 대체되는 부분 START -->
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>
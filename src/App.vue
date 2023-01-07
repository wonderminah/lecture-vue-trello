<template>
  <div id="app">
    <Navbar />

    <!-- vue-router에 따라 라우터에 의해서 컴포넌트로 대체되는 부분 START -->
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: { Navbar },
  data () {
    return {
    }
  }
}
</script>
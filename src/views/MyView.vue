<template>
  <div>
    <app-header></app-header>
    <web class="webview" :src="url"></web>
    <text class="fixed-button" @click="jump(`/`)">返回</text>
  </div>
</template>

<style scoped>
  .webview {
    flex: 1;
  }
  .fixed-button {
    position: absolute;
    bottom: 50px;
    right: 50px;
    background-color: #FC6621;
    border-radius: 10px;
    width: 120px;
    padding: 15px;
    color: white;
    text-align: center;
  }
</style>

<script>
  import AppHeader from '../components/app-header.vue'

  export default {
    components: { AppHeader},
        data () {
        return {
            loading: true
        }
    },
    computed: {
      url () {
        if (this.$route && this.$route.params) {
            const url = this.$route.params.url
            return 'http://www.'+url+'.com/'
        }
      }
    }
  }
</script>

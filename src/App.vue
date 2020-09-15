<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { sysName } from '@/config'
export default {
  watch: {
    '$route' (val) {
      window.document.title = sysName
    }
  },
  mounted () {
    window.document.title = sysName
  }
}
</script>
<style lang="scss">
</style>

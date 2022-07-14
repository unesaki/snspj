<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        {{ data }}
      </h1>
      <h2 class="subtitle">
        My superb Nuxt.js project
      </h2>
    </div>
  </div>
</template>

<script>
import NuxtLogo from '~/components/NuxtLogo.vue'

export default {
  components: {
    NuxtLogo
  },
  async asyncData({ app }) {
    const data = await app.$axios.$get('http://localhost:8000/api')
    return {
      data
    }
  }
}

</script>

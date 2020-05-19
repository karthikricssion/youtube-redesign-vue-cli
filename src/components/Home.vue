<template>
  <div class="main-content">
    <videoCard :type='"small"' />
  </div>
</template>

<script>
import videoCard from '../components/cards/video.cards'

export default {
  name: 'Home',
  components: {
    videoCard
  }
}

</script>

<style lang="less" scoped>
.main-content {
  width: 100%;
  padding: 16px;
}
</style>

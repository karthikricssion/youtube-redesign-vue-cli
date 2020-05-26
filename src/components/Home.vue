<template>
  <div class="c-flex full-height scroll">
    <div class="main-content">
      <VideoSectionCard 
        :type='"small"' 
        :perPage="[[768, 3], [1024, 4], [1441, 5]]"
      />

      <VideoSectionCard 
        :type='"medium"' 
        :perPage="[[768, 2], [1024, 2], [1441, 3]]"
      />

      <VideoSectionCard 
        :type='"small"' 
        :perPage="[[768, 3], [1024, 4], [1441, 5]]"
      />

      <VideoSectionCard 
        :type='"medium"' 
        :perPage="[[768, 2], [1024, 2], [1441, 3]]"
      />
    </div>
  </div>
</template>

<script>
import VideoSectionCard from './cards/video.carousel.card';

export default {
  name: 'Home',
  components: {
    VideoSectionCard
  }
}

</script>

<style lang="less" scoped>
.main-content {
  width: 100%;
  padding: 8px;
  max-width: 1441px;
  margin: 0 auto;
}
</style>

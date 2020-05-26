<template>
    <div class="video-carousel-section">
        <sectionHeader />
        <VideoCarousel 
            :type="type" 
            :perPage="perPage"
        />
    </div>
</template>

<script>
import sectionHeader from '../section.header';
import VideoCarousel from '../carousel/video.carousel';

export default {
    props: ['type', 'perPage'],
    name: `videoCarouselSection`,
    components: {
        sectionHeader,
        VideoCarousel
    }
}
</script>

<style lang="less" scoped>
.video-carousel-section {
    padding: 8px;
    margin-bottom: 16px;
}
</style>
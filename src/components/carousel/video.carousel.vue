<template>
    <Carousel :perPageCustom="perPage" :navigationEnabled="false" :paginationEnabled="false">
        <slide v-for="item in [1,2,3,4,5,6,7,8,9,10]" :key="item">
            <VideoCard :type="type" />
        </slide>
    </Carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import VideoCard from '../cards/video.cards';
export default {
    props: ['type', 'perPage'],
    name: 'VideoCarousel',
    components: {
        Carousel,
        Slide,
        VideoCard
    }
}
</script>

<style lang="less" scoped>

</style>
<template>
    <div class="thumbnail-holder" v-bind:class="{ 'no-image': src === '' }" :style="{ width: size+'px', height:size+'px', backgroundColor: genRandomBG() }">
        <template v-if="src">
            <img :src="src" class="img-responsive" />
        </template>

        <template v-else>
            <span>{{name[0]}}</span>
        </template>
    </div>
</template>

<script>
import RandomColorGen from 'random-flat-colors';

export default {
    props: ['src', 'size', 'name'],
    name: 'userThumb',
    data() {
        return {
            genRandomBG: RandomColorGen
        }
    }
}
</script>

<style lang="less" scoped>
    .thumbnail-holder {
        min-width: 24px;
        border-radius: 505%;
        overflow: hidden;

        &.no-image {
            text-align: center;
            background-color: aqua;
            color: #fff;
            font-size: 1em;
            padding-top: 1px;
        }
    }
</style>
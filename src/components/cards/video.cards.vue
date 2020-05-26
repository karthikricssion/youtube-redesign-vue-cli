<template>
    <div class="video-card-holder" v-bind:class="[type || 'small']">
        <div class="video-thumb-image-holder" 
            :style="{backgroundImage: 'url(' + require('@/assets/travel.jpg') + ')' }"
        >
            <span class="video-duration">4:15</span>
        </div>

        <div class="video-information-holder">
            <h6>Hello world, this is awesome</h6>
            <div class="c-flex other-information">
                <div class="c-flex views-date-posted">
                    <span class="view-count">80K views</span>
                    <span class="posted-at">3 days ago</span>
                </div>
                <div class="channel-name">Dollie Blair</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['type'],
    name: 'videoCard'
}
</script>

<style lang="less" scoped>
.video-card-holder {
    padding: 8px;
    .video-thumb-image-holder {
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 10px;
        position: relative;
        margin-bottom: 8px;

        .video-duration {
            position: absolute;
            bottom: 8px;
            right: 8px;
            background-color: rgba(0, 0, 0, 0.5686274509803921);
            color: #fff;
            font-size: 12px;
            display: block;
            padding: 1px 8px;
            border-radius: 20px;
        }
    }

    .video-information-holder {
        h6 {
            margin-bottom: 4px;
            font-size: 14px;
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .other-information {
            font-size: 11px;
            color: #abacac;

            .iews-date-posted {
                .view-count {

                }

                .posted-at {
                    margin-left: 8px;
                }
            }

            .channel-name {

            }
        }
    }
    
    &.small {
        // width: 200px;

        .video-thumb-image-holder {
            height: 150px;
        }
    }

    &.medium {
        .video-thumb-image-holder {
            height: 200px;
        }
    }
}
</style>
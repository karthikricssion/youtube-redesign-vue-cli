<template>

    <div class="video-card-holder" v-bind:class="[type || 'small']">
        <div class="video-thumb-image-holder" 
            :style="{backgroundImage: 'url(' + require('@/assets/travel.jpg') + ')' }"
        >
            <span class="video-duration">4:15</span>
        </div>

        <div class="video-information-holder">
            <h6>A Brief History of Creation</h6>
            <div class="other-information">
                <div class="views-date-posted">
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
    .video-thumb-image-holder {
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 20px;
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

        .video-information-holder {
            h6 {

            }

            .other-information {
                .iews-date-posted {
                    .view-count {

                    }

                    .posted-at {

                    }
                }

                .channel-name {

                }
            }
        }
    }
    
    &.small {
        width: 200px;

        .video-thumb-image-holder {
            height: 150px;
        }
    }
}
</style>
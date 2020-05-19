<template>
    <div class="single-user-subscribed-channel">
        <div class="channel-thumbnail">
            <userThumb :src="src" :size="size" :name="name"/>
        </div>
        <div class="channel-description">
            <p class="channel-name">{{name}}
                <template v-if="isNotify">
                    <span class="notify"></span>
                </template>
            </p>
        </div>
    </div>
</template>

<script>

import userThumb from './user.thumbnail';

export default {
    props: ['src', 'size', 'isNotify', 'name'],
    name: 'singleChannelHeading',
    components: {
        userThumb
    }
}
</script>

<style lang="less" scoped>
    .single-user-subscribed-channel {
        padding: 8px 16px;
        display: flex;
        cursor: pointer;
        user-select: none;

        &:hover {
            opacity: 0.8;
        }

        .channel-thumbnail {
            white-space: nowrap;
        }

        .channel-description {
            flex: 1;
            min-width: 0;
            position: relative;

            .channel-name {
                font-size: 14px;
                padding: 3px 8px;
                margin: 0;
                color: #abacac;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-weight: 400;
                padding-right: 16px;


                .notify {
                    position: absolute;
                    background-color: #065fd4;
                    width: 4px;
                    height: 4px;
                    top: 12px;
                    right: 0;
                    border-radius: 50%;
                }
            }
        }
    }
</style>
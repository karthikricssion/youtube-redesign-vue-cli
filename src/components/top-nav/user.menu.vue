<template>
    <div class="c-flex user-notify-info-holder">
        <div class="menu-icon">
            <vue-material-icon name="videocam"  :size="24"></vue-material-icon>
        </div>
        <div class="menu-icon">
            <vue-material-icon name="apps"  :size="24"></vue-material-icon>
        </div>
        <div class="menu-icon">
            <vue-material-icon name="notifications_none"  :size="24"></vue-material-icon>
            <span class="notify-badege">
                <svg viewBox="0 0 100 100">
                    <foreignObject width="100%" height="100%">
                        <span>10</span>
                    </foreignObject>
                </svg> 
            </span>
        </div>
        <div class="user-thumb-holder no-padding">
            <userThumb
                :src='"https://randomuser.me/api/portraits/med/women/10.jpg"'
                :name='"Elaine Hart"'
                :size="32"
            ></userThumb>
        </div>
    </div>
</template>

<script>
import userThumb from '../user.thumbnail';

export default {
    name: 'NavUserInfo',
    components: {
        userThumb
    }
}
</script>

<style lang="less" scoped>
.user-notify-info-holder {
    justify-content: flex-end;
    padding: 8px;

    .menu-icon {
        width: 40px;
        text-align: center;
        height: 40px;
        padding: 8px;
        cursor: pointer;
        user-select: none;
        border-radius: 50%;
        margin-right: 8px;
        color: #abacac;
        position: relative;

        .notify-badege {
            background-color: rgb(237, 56, 51);
            color: #fff;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            position: absolute;
            top: 16%;
            right: 21%;

            svg {
                vertical-align: top;
            }
            
            span {
                font-size: 4rem;
                display: block;
                color: white;
            }
        }

        &:hover {
            background-color: #f2f2f2;
        }
    }

    .user-thumb-holder {
        margin: 4px 8px 0 8px;
    }
}
</style>
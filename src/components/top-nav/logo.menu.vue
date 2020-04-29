<template>
    <div class="c-flex yt-clone-logo-menu-holder">
        <div class="menu-icon" @click="toggleSideMenu()">
            <vue-material-icon name="menu"  :size="24"></vue-material-icon>
        </div>
        <div class="logo-icon-holder">
            <router-link to="/">
                <font-awesome-icon :icon="['fab', 'youtube']" size="lg" :style="{ color: '#ed3833' }" />
                <span class="logo-name">Youtube</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavLogo',
        methods: {
            toggleSideMenu() {
                console.log('Hello, i a clicked!')
            }
        }
    }
</script>

<style lang="less">
    .yt-clone-logo-menu-holder {
        padding: 8px;
        flex: 0 0 30% !important;

        .menu-icon {
            width: 40px;
            text-align: center;
            height: 40px;
            padding: 8px;
            cursor: pointer;
            user-select: none;
            border-radius: 50%;
            margin-right: 8px;

            &:hover {
                background-color: #f2f2f2;
            }
        }

        .logo-icon-holder {
            a {
                color: #333;
                display: block;
                margin-top: 8px;

                .logo-name {
                    font-weight: 600;
                    margin-left: 4px;
                }
            }
        }
    }
</style>

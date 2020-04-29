<template>
    <div class="c-flex yt-clone-top-navbar">
        <NavLogo />
        <NavSearchBox />
        <NavUserInfo />
    </div>

</template>

<script>
    import NavLogo from './logo.menu'
    import NavUserInfo from './user.menu'
    import NavSearchBox from './search'

    export default {
        name: 'Nav',
        components: {
            NavLogo,
            NavUserInfo,
            NavSearchBox
        }
    }
</script>

<style lang="less">

    .yt-clone-top-navbar {
        background-color: #fff;
        flex: 0 0 56px !important;
    }

</style>

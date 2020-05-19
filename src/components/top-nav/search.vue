<template>
    <div class="c-flex m-search-bar-holder">
        <div class="search-bar">
            <div class="search-icon-holder">
                <vue-material-icon name="search"  :size="20"></vue-material-icon>
            </div>
            <input type="search" placeholder="Search"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavSearchBox'
}
</script>

<style lang="less" scoped>
    .m-search-bar-holder {
        .search-bar {
            width: 100%;
            padding: 8px 16px;
            position: relative;

            .search-icon-holder {
                position: absolute;
                top: 14px;
                left: 24px;
                color: #abacac;
            }

            input {
                width: 100%;
                border: 0;
                background-color: #faf9f9;
                border-radius: 4px;
                height: 32px;
                padding: 0 8px;
                font-size: 14px;
                padding-left: 32px;
                outline: 0;
            }
        }
    }
</style>
<template>
    <div class="section-header c-flex">
        <div class="channel-user-information">
            <h6>Recommended</h6>
        </div>
        <div class="navigation-subscribe-actions">
            <button>Subscribe</button>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'sectionHeader'
}
</script>

<style lang="less" scoped>
.section-header {
    padding: 8px;
    justify-content: space-between;

    .channel-user-information {
        padding: 0 8px;
        h6 {
            display: inline-block;
            margin: 0;
        }
    }

    .navigation-subscribe-actions {

    }
}
</style>
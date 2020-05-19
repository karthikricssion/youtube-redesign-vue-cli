<template>
    <div id="app" class="c-flex c-flex-column full-height">
        <TopNav />
        <div class="c-flex">
            <SideNave />
            <div class="c-flex main-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import TopNav from './components/top-nav'
    import SideNave from './components/side-nav'

    export default {
        name: 'App',
        components: {
            TopNav,
            SideNave
        }
    }

</script>

<style lang="less">    
    @import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);
    
    html, body {
        background-color: #fff;
        color: #182128;
        width: 100%;
        height: 100%;
        font-family: 'Roboto', sans-serif;
        overflow: hidden;
        user-select: none;

        a {
            transition: color .1s linear, background-color .1s ease-in;
            color: #039be5;
            text-decoration: none !important;
        }
    }

    .full-height {
        height: 100%;
        min-height: 0;
    }

    .c-flex {
        display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
        display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
        display: -ms-flexbox;      /* TWEENER - IE 10 */
        display: -webkit-flex;     /* NEW - Chrome */
        display:flex;
        flex: 1 0 0;
        min-width: 0;
    }

    .c-flex-column {
        flex-direction: column;
    }

    .c-flex-row {
        flex-direction: row;
    }

    .c-flex-end {
        align-content: flex-end;
        flex-wrap: wrap;
    }

    .scroll {
        overflow: hidden;
        overflow-y: auto;
        
        &::-webkit-scrollbar {
            width: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background: rgba(82, 80, 80, 0.5);
            border-radius: 5px;
        }

        &::-webkit-scrollbar-track {
            background: transparent;
        }
    }

    .text-center {
        text-align: center;
    }

    .scroll-x {
        overflow: hidden;
        overflow-x: auto;
        
        &::-webkit-scrollbar {
            height: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background: rgba(216,216,216,.5);
            border-radius: 5px;
        }

        &::-webkit-scrollbar-track {
            background: rgba(255,255,255,.1);
        }
    }

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }
    
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
    
    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }
    
    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }
    
    .modal-body {
        margin: 20px 0;
    }
    
    .modal-default-button {
        float: right;
    }
    
    /*
    * The following styles are auto-applied to elements with
    * transition="modal" when their visibility is toggled
    * by Vue.js.
    *
    * You can easily play with the modal transition by editing
    * these styles.
    */
    
    .modal-enter {
        opacity: 0;
    }
    
    .modal-leave-active {
        opacity: 0;
    }
    
    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    

    .m-r-8 {
        margin-right: 8px;
    }

    .no-padding {
        padding: 0 !important;
    }

    .no-margin {
        margin: 0 !important;
    }

    .img-responsive {
        width: 100%;
        display: block;
        margin: auto;
    }

    .g-btn-primary {
        background-color: #333333;
        color: #fff;
        outline: 0;
    }
</style>

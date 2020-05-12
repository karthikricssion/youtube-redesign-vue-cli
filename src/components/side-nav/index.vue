<template>
    <div class="c-flex c-flex-column full-height side-nav">
        <div class="c-flex c-flex-column full-height scroll side-menu-quick-nav">
            <div class="">
                <div class="side-menu-main-nav">
                    <router-link to="/" class="s-nav-link">
                        <home-outline-icon />
                        <span class="nav-title">Home</span>
                    </router-link>

                    <router-link to="/" class="s-nav-link active-link">
                        <fire-icon />
                        <span class="nav-title">Trending</span>
                    </router-link>

                    <router-link to="/" class="s-nav-link">
                        <subscriptions-icon />
                        <span class="nav-title">Subscriptions</span>
                    </router-link>
                </div>

                <div class="side-menu-others">
                    <router-link to="/" class="s-nav-link">
                        <folder-outline-icon />
                        <span class="nav-title">Library</span>
                    </router-link>

                    <router-link to="/" class="s-nav-link">
                        <history-icon />
                        <span class="nav-title">History</span>
                    </router-link>

                    <router-link to="/" class="s-nav-link">
                        <clock-icon />
                        <span class="nav-title">Watch later</span>
                    </router-link>

                    <router-link to="/" class="s-nav-link">
                        <like-outline-icon />
                        <span class="nav-title">Liked videos</span>
                    </router-link>

                    <router-link to="/" class="s-nav-link">
                        <fav-outline-icon />
                        <span class="nav-title">Favourites</span>
                    </router-link>

                    <router-link to="/" class="s-nav-link">
                        <music-icon />
                        <span class="nav-title">Music</span>
                    </router-link>
                </div>

                <div class="side-menu-user-subscriptions">
                    <h5>Subscriptions</h5>
                    <div class="user-subscribed-list">

                        <div class="single-user-subscribed-channel">
                            <div class="channel-thumbnail">
                                <div class="thumbnail-holder">
                                    <img src="https://randomuser.me/api/portraits/med/women/68.jpg" class="img-responsive" />
                                </div>
                            </div>
                            <div class="channel-description">
                                <p class="channel-name">Holly Burke</p>
                            </div>
                        </div>

                        <div class="single-user-subscribed-channel">
                            <div class="channel-thumbnail">
                                <div class="thumbnail-holder">
                                    <img src="https://randomuser.me/api/portraits/med/men/75.jpg" class="img-responsive" />
                                </div>
                            </div>
                            <div class="channel-description">
                                <p class="channel-name">Eleftheria Batsou
                                    <span class="notify"></span>
                                </p>
                            </div>
                        </div>

                        <div class="single-user-subscribed-channel">
                            <div class="channel-thumbnail">
                                <div class="thumbnail-holder">
                                    <img src="https://randomuser.me/api/portraits/med/men/10.jpg" class="img-responsive" />
                                </div>
                            </div>
                            <div class="channel-description">
                                <p class="channel-name">Roy Byrd
                                    <span class="notify"></span>
                                </p>
                            </div>
                        </div>

                        <div class="single-user-subscribed-channel">
                            <div class="channel-thumbnail">
                                <div class="thumbnail-holder">
                                    <img src="https://randomuser.me/api/portraits/med/men/76.jpg" class="img-responsive" />
                                </div>
                            </div>
                            <div class="channel-description">
                                <p class="channel-name">Gavin Edwards</p>
                            </div>
                        </div>

                        <div class="single-user-subscribed-channel">
                            <div class="channel-thumbnail">
                                <div class="thumbnail-holder">
                                    <img src="https://randomuser.me/api/portraits/med/women/75.jpg" class="img-responsive" />
                                </div>
                            </div>
                            <div class="channel-description">
                                <p class="channel-name">Colleen Evans</p>
                            </div>
                        </div>

                        <div class="single-user-subscribed-channel">
                            <div class="channel-thumbnail">
                                <div class="thumbnail-holder">
                                    <img src="https://randomuser.me/api/portraits/med/women/60.jpg" class="img-responsive" />
                                </div>
                            </div>
                            <div class="channel-description">
                                <p class="channel-name">Bobbie Gibson
                                    <span class="notify"></span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="c-flex side-menu-user-setting-wrapper">
            <div class="side-menu-user-setting">
                <router-link to="/" class="s-nav-link">
                    <settings-outline-icon />
                    <span class="nav-title">Settings</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import HomeOutlineIcon from 'vue-material-design-icons/HomeOutline';
import FireIcon from 'vue-material-design-icons/Fire';
import SubscriptionsIcon from 'vue-material-design-icons/YoutubeSubscription';
import FolderOutlineIcon from 'vue-material-design-icons/FolderOutline';
import HistoryIcon from 'vue-material-design-icons/History';
import ClockIcon from 'vue-material-design-icons/Clock';
import FavOutlineIcon from 'vue-material-design-icons/StarOutline'
import LikeOutlineIcon from 'vue-material-design-icons/HeartOutline'
import MusicIcon from 'vue-material-design-icons/MusicBoxOutline';
import SettingsOutlineIcon from 'vue-material-design-icons/CogOutline';

export default {
    name: 'sideNave',
    components: {
        HomeOutlineIcon,
        FireIcon,
        SubscriptionsIcon,
        FolderOutlineIcon,
        HistoryIcon,
        ClockIcon,
        LikeOutlineIcon,
        FavOutlineIcon,
        MusicIcon,
        SettingsOutlineIcon
    }
}
</script>

<style lang="less">
.side-nav {
    flex: 0 0 240px !important;

    .side-menu-quick-nav {
        .side-menu-main-nav {
            margin-bottom: 16px;
        }

        .side-menu-others {
            margin-bottom: 16px;
        }

        .side-menu-user-subscriptions {
            h5 {
                padding: 0 16px;
                font-size: 14px;
                margin-bottom: 8px;
                color: #5f5f5f;
                text-transform: uppercase;
            }
        }
    }

    .side-menu-user-setting-wrapper {
        flex: 0 0 56px;

        .side-menu-user-setting {
            padding-top: 8px;
        }
    }

    .s-nav-link {
        display: block;
        padding: 8px 16px;
        color: #abacac;
        font-weight: 300;
        cursor: pointer;
        user-select: none;

        .material-design-icon {
            display: inline-block;
            vertical-align: top;
        }

        .nav-title {
            font-size: 14px;
            display: inline-block;
            vertical-align: top;
            padding: 3px;
            margin-left: 5px;
        }

        &:hover {
            opacity: 0.8;
        }

        &.active-link {
            .material-design-icon {
                color: #ed3833;
            }   

            .nav-title {
                color: #333;
                font-weight: 700;
            }
        }
    }

    .user-subscribed-list {
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

                .thumbnail-holder {
                    width: 24px;
                    height: 24px;
                    border-radius: 505%;
                    overflow: hidden;
                }
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
                    font-weight: 300;
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
    }
}
</style>
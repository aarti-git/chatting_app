<template>
    <div class="profile">
        <div class="profile__wrapper">
            <div class="profile__title-wrapper">
                <span class="profile__title">Profile</span>
                <div @click="removeProfile">
                    <IconButton>
                        <svg class="profile__icon" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path>
                        </svg>
                    </IconButton>
                </div>
            </div>
            <div class="profile__scrollbar-wrapper">
                <div class="profile__details-wrapper">
                    <img class="profile__img" src="../assets/image/yogesh.jpg">
                    <span  class="profile__details-name">Yogesh jagdale</span>
                    <i class="profile__details-last-seen">last seen : Today</i>
                </div>
                <div class="profile__tabs">
                    <ul class="profile__tabs-name-list">
                        <li class="profile__tabs-name-item profile__tabs-about-item active-tab" @click="openAboutTab">About</li>
                        <li class="profile__tabs-name-item profile__tabs-media-item" @click="openMediaTab">media</li>
                    </ul>
                    <div  v-if="aboutTab" class="profile__about-tab">
                            <p class="profile__about-tab-pare">Lorem ipsum is a pseudo-Latin text used in web design, 
                                typography, layout, and printing in place of English to
                                emphasise design elements over content. It's also called 
                                placeholder (or filler) text. It's a convenient tool for mock-ups.
                            </p>
                            <div class="profile__about-tab-info-parent">
                                <h6 class="profile__about-tab-titles">Phone</h6>
                                <p class="profile__about-tab-info">+91 9876543210</p>
                            </div>
                            <div class="profile__about-tab-info-parent">
                                <h6 class="profile__about-tab-titles">City</h6>
                                <p class="profile__about-tab-info">Bangalore</p>
                            </div>
                            <div class="profile__about-tab-info-parent">
                                <h6 class="profile__about-tab-titles">Website</h6>
                                <a href="https://music-spotify.herokuapp.com/" target="blank" class="profile__about-tab-info">https://music-spotify.herokuapp.com/</a>
                            </div>
                            <div class="profile__about-tab-info-parent">
                                <h6 class="profile__about-tab-titles">Social media accounts</h6>
                                <div class="prfile__media-icon-wrapper">
                                    <div class="prfile__media-icon-parent">
                                        <svg class="profile__media-icon"  aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" class=""></path></svg>
                                    </div>
                                    <div class="prfile__media-icon-parent">
                                        <svg class="profile__media-icon"  aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" class=""></path></svg>
                                    </div>
                                    <div class="prfile__media-icon-parent">
                                        <svg class="profile__media-icon" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" class=""></path></svg>
                                    </div>
                                    <div class="prfile__media-icon-parent">
                                        <svg  class="profile__media-icon" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" class=""></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="profile__about-tab-info-parent">
                                <h6 class="profile__about-tab-titles">Setting</h6>
                                <ToggleBtn lable="Block" @change="settingBtns($event, 'Block')"></ToggleBtn>
                                <ToggleBtn lable="Mute" @change="settingBtns($event, 'Mute')"></ToggleBtn>
                                <ToggleBtn lable="Get Notification" @change="settingBtns($event,'Get Notification')"></ToggleBtn>
                            </div>
                        <!-- </div> -->
                    </div>
                    <div v-if="mediaTab" class="profile__media-tab">
                        <div>
                            <p>Resent File</p>
                            <span>Upload</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import IconButton from './global/IconButton';
import ToggleBtn from './global/ToggleBtn';
import { mapMutations} from 'vuex'
export default {
    components:{
        IconButton,
        ToggleBtn,
    },
    data(){
        return {
            click:true, 
            aboutTab:true,
            mediaTab:false
        }
  },
    methods:{
            ...mapMutations(["toggleProfile"]),
            openAboutTab(e){
                console.log(e)
                let mediaItem = document.querySelector(".profile__tabs-media-item")
                this.aboutTab = true;
                this.mediaTab = false;
                e.target.classList.add("active-tab");
                mediaItem.classList.remove("active-tab");
            },
            openMediaTab(e){
                let aboutItem= document.querySelector(".profile__tabs-about-item");
                this.aboutTab = false;
                this.mediaTab = true;
                e.target.classList.add("active-tab");
                aboutItem.classList.remove("active-tab");
            },
            settingBtns(state, type){
                console.log(state, type)
            },
            removeProfile(){
                this.toggleProfile(false)
                let chatBox = document.querySelector(".chat-box");
				chatBox.classList.remove("hide");
            }
        }
}
</script>

<style lang="scss">
    @import "../design";

    .profile{
        max-width: 100%;
        @include above('tablet'){
            max-width: 350px;
        }
    }
    .profile__wrapper{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .profile__title-wrapper{
        display: flex;
        align-items: center;
        justify-content:space-between;
        padding: 20px 30px;
    }
    .profile__title{
        font-size: 23px;
        font-weight: 600;
        color: var(--color2);
    }
    .profile__icon{
        width: 18px;
        height: 18px;
    }
    .profile__img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border:0;
        margin: 0 auto;
        vertical-align: middle;
    }
    .profile__scrollbar-wrapper::-webkit-scrollbar{
        display: none;
    }
    .profile__scrollbar-wrapper{
        overflow-y: auto;
        flex: 1 1 100%;
    }
    .profile__details-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
    .profile__details-name{
        font-size: 23px;
        font-weight: 600;
        margin: 10px 0;
        color: var(--color2);
    }
    .profile__details-last-seen{
        font-size: 13px;
        color: var(--color4);
    }
    .prfile__media-icon-wrapper{
        display: flex;
    }
    .prfile__media-icon-parent{
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
        background: var(--border-color);
        border-radius: 50% ;
    }
    .profile__media-icon{
        width: 15px;
        height: 15px;
    }
    .profile__tabs{
        padding: 30px;
        width: 100%;
        @include above('tablet'){
            width: 300px;
        }
        @include above('desktop'){
            width: 350px;
        }
    }
    .active-tab{
        color: var(--color3) !important;
        border-bottom: 2px solid var(--color3);
    }
    .profile__tabs-name-list{
        list-style: none;
        display: flex;
        justify-content: center;
        padding: 20px 0;
    }
    .profile__tabs-name-item{
        font-size: 14px;
        padding: 5px 10px;
        cursor: pointer;

        &:hover{
            color: var(--border-color2);
        }
    }
    .profile__tab-names{
        padding: 5px 10px;
        cursor: pointer;
    }
    .profile__about-tab-pare{
        font-size: 14px;
        color: var(--border-color2);
        line-height: 23px;
        margin-bottom: 20px;
    }
    .profile__about-tab-titles{
        font-size: 20px;
        padding: 10px 0;
        font-weight: 500;
        color: var(--color2);
    }
    .profile__about-tab-info-parent{
        margin-bottom: 20px;
    }
    .profile__about-tab-info{
        font-size: 14px;
        color:var(--border-color2);
    }
    
</style>
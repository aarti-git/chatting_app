<template>
    <div class="editprofile__wrapper">
       <div class="editprofile__header">
           <div class="editprofile__tittle-wrapper">
                <svg class="editprofile__icon" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user-edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zm406.6 204.1l-34.7-34.7c-6.3-6.3-14.5-9.4-22.8-9.4-8.2 0-16.5 3.1-22.8 9.4L327.8 424l-7.6 68.2c-1.2 10.7 7.2 19.8 17.7 19.8.7 0 1.3 0 2-.1l68.2-7.6 222.5-222.5c12.5-12.7 12.5-33.1 0-45.7zM393.3 473.7l-39.4 4.5 4.4-39.5 156.9-156.9 35 35-156.9 156.9zm179.5-179.5l-35-35L573 224h.1l.2.1 34.7 35-35.2 35.1zM134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 20.7 0 39.9 6.3 56 16.9l22.8-22.8c-22.2-16.2-49.3-26-78.8-26-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h243.5c-2.8-7.4-4.1-15.4-3.2-23.4l1-8.6H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320z"></path>
                </svg>
                <h5 class="editprofile__tittle"> Edit Profile </h5>
           </div>
           <div @click.stop="closeSettingOverlay" class="editprofile__icon-wrapper">
                <svg class="editprofile__icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                </svg>
           </div>
       </div>
        <div class="editprofile__form-containt">
            <div class="editprofile__input-wrapper">
                <div>
                    <ul class="editprofile__tabs-name-list">
                        <li @click="activTab(1)" class="profile__tabs-name-item" :class="{ active : active_el === 1}">Personal</li>
                        <li @click="activTab(2)" class="profile__tabs-name-item" :class="{ active : active_el === 2 }">About</li>
                        <li @click="activTab(3)" class="profile__tabs-name-item" :class="{ active : active_el === 3 }">Social links</li>
                    </ul>
                </div>
                <div v-if="personalTab">
                    <div class="editprofile__input-parent">
                        <label class="editprofile__lable"> Name</label>
                        <input type="text" class="editprofile__input" >
                        <div class="editprofile__imoji-icon-parent">
                            <svg class="editprofile__imoji-icon" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="smile-beam" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path fill="currentColor" d="M168 205.4c12.3 0 23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.4 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.8 19.2-21.6 31.5-21.6zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216zm80-304c-23.8 0-52.7 29.3-56 71.4-.3 3.7 2.1 7.2 5.7 8.3 3.4 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4zm10.2 157.8C315.8 352.6 282.9 368 248 368s-67.8-15.4-90.2-42.2c-5.7-6.8-15.8-7.7-22.5-2-6.8 5.7-7.7 15.7-2 22.5C161.7 380.4 203.6 400 248 400s86.3-19.6 114.8-53.8c5.7-6.8 4.8-16.9-2-22.5-6.9-5.6-16.9-4.7-22.6 2.1z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="editprofile__input-parent">
                        <label class="editprofile__lable"> Picture</label>
                        <div class="editprofile__profile-wrapper">
                            <img src="../assets/image/aarti.jpg" class='editprofile__img'>
                            <div class="editprofile__input">
                                <input type="file" class="editprofile__file-input input" @change="updateProfile" >
                                <span id="editprofile__file-name"></span>
                            </div>
                            <div class="editprofile__imoji-icon-parent">
                            <svg class="editprofile__imoji-icon" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="file-image" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor" d="M159 336l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0l-39 39L63 448h256V304l-55.5-55.5c-4.7-4.7-12.3-4.7-17 0L159 336zm96-50.7l32 32V416H95.1l.3-67.2 15.6-15.6 48 48c20.3-20.3 77.7-77.6 96-95.9zM127 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm0-96c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm242.9-62.1L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM256 32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5zM352 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304z"></path>
                            </svg>
                            </div>
                        </div>
                    </div>
                    <div class="editprofile__input-parent">
                        <label class="editprofile__lable"> city</label>
                        <input type="text" class="editprofile__input" >
                        <div class="editprofile__imoji-icon-parent">
                            <svg class="editprofile__imoji-icon" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="smile-beam" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path fill="currentColor" d="M168 205.4c12.3 0 23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.4 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.8 19.2-21.6 31.5-21.6zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216zm80-304c-23.8 0-52.7 29.3-56 71.4-.3 3.7 2.1 7.2 5.7 8.3 3.4 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4zm10.2 157.8C315.8 352.6 282.9 368 248 368s-67.8-15.4-90.2-42.2c-5.7-6.8-15.8-7.7-22.5-2-6.8 5.7-7.7 15.7-2 22.5C161.7 380.4 203.6 400 248 400s86.3-19.6 114.8-53.8c5.7-6.8 4.8-16.9-2-22.5-6.9-5.6-16.9-4.7-22.6 2.1z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="editprofile__input-parent">
                        <label class="editprofile__lable"> Phone</label>
                        <input type="number" class="editprofile__input" >
                        <div class="editprofile__imoji-icon-parent">
                            <svg class="editprofile__imoji-icon" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="smile-beam" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path fill="currentColor" d="M168 205.4c12.3 0 23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.4 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.8 19.2-21.6 31.5-21.6zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216zm80-304c-23.8 0-52.7 29.3-56 71.4-.3 3.7 2.1 7.2 5.7 8.3 3.4 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4zm10.2 157.8C315.8 352.6 282.9 368 248 368s-67.8-15.4-90.2-42.2c-5.7-6.8-15.8-7.7-22.5-2-6.8 5.7-7.7 15.7-2 22.5C161.7 380.4 203.6 400 248 400s86.3-19.6 114.8-53.8c5.7-6.8 4.8-16.9-2-22.5-6.9-5.6-16.9-4.7-22.6 2.1z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div v-if="aboutTab">
                    <div>
                        <label class="editprofile__lable">Write a few words that describe you</label>
                        <textarea  class="editprofile__message-textarea" rows="3" name="comment" form="usrform" placeholder=" Enter text here..."></textarea>
                    </div>    
                </div>
                <div v-if="socialLinkTab">
                    <ToggleBtn lable="Suggest changing passwords every month." @change="settingBtns($event, 'Suggest changing passwords every month.')"></ToggleBtn>
                    <ToggleBtn lable="Let me know about suspicious entries to your account" @change="settingBtns($event, 'Let me know about suspicious entries to your account')"></ToggleBtn>
                </div>
            </div>
            <div class="editprofile__save-btn-wrapper">
                <button class="editprofile__save-btn">Save</button>
            </div>
        </div>
    </div>
</template>
<script>
import ToggleBtn from './global/ToggleBtn';
export default {
    components:{
        ToggleBtn
    },
    data(){
        return{
            personalTab:true,
            aboutTab :false,
            socialLinkTab :false,
            active_el:1
        }
    },
    methods:{
        closeSettingOverlay(){
            this.$emit('close');
        },
        settingBtns(state, type){
                console.log(state, type)
        },
        activTab(el){
            if(el == 1){
                this.personalTab = true;
                this.aboutTab = false;
                this.socialLinkTab = false;
            }else if(el == 2){
                this.personalTab = false;
                this.aboutTab = true;
                this.socialLinkTab = false;
            }else{
                this.personalTab = false;
                this.aboutTab = false;
                this.socialLinkTab = true;
            }
            this.active_el = el;
        },
        // inputFileName(e){
        //     console.log("event",e.target.files[0].name);
        //     let fileName= document.querySelector("#editprofile__file-name");
        //     fileName.innerHTML = e.target.files[0].name;
        // },
        updateProfile(e){
             console.log("event",e.target.files[0].name);
            let fileName= document.querySelector("#editprofile__file-name");
            fileName.innerHTML = e.target.files[0].name;

            // 
            var img = document.querySelector(".editprofile__img") ;
            var file = document.querySelector(".input").files[0];
            var reader = new FileReader();
            reader.addEventListener("load",function(){
                img.src= reader.result;
            },false)

            if(file){
                    reader.readAsDataURL(file);
            }
            // 
        }
    }
}
</script>
<style lang="scss" scoped>
     @import '../design';

    .editprofile__wrapper{
        width: 100%;
        height: 100%;
        background-color: var(--color1);

        @include above('tablet'){
            width: 500px;
            height: auto;
            border-radius: 10px;
        }
    }
    .editprofile__header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color3);
        color: var(--color1);
        padding: 20px;

        @include above('tablet'){
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        }
    }
    .editprofile__tittle-wrapper{
        display: flex;
        align-items: center;
    }
    .editprofile__tittle{
        font-size: 18px;
        margin-left: 10px;
    }
    .editprofile__icon-wrapper{
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            background-color: rgba(0,0,0,0.3);
            border-radius: 50%;
        }
    }
    .editprofile__icon{
        width: 18px;
        height: 18px;
        color: var(--color1);
    }
    .editprofile__form-containt{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100% - 12%);
        @include above('tablet'){
           height:auto; 
        }
    }
    .editprofile__input-wrapper{
        padding: 40px;
        width: 100%;
        @include above('tablet'){
           height:auto; 
        }
       
    }
    .editprofile__tabs-name-list{
        list-style: none;
        display: flex;
        padding: 20px 0;
    }
    .active {
        color: var(--color3) !important;
        border-bottom: 2px solid var(--color3);
    }
    .profile__tabs-name-item {
        font-size: 16px;
        padding: 5px 10px;
        cursor: pointer;
        color: var(--color2);
        margin-right: 5px;
    }
    .editprofile__save-btn-wrapper{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 20px 40px;
    }
    .editprofile__save-btn{
        background-color: var(--color3);
        color: var(--color1);
        padding: 10px 20px;
        border-radius: 3px;
        border: 0px;
    }
    .editprofile__imoji-icon-parent{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 28px;
        right:0;
        width: 45px;
        height: 35px;
        background-color: var(--border-color);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px ;
    }
    .editprofile__imoji-icon{
        width: 16px;
        height: 16px;
        color: var(--color2);
    }
    .editprofile__lable{
        font-size: 15px;
    }
    .editprofile__input-parent{
        position: relative;
        margin-bottom: 20px;
    }
    .editprofile__input{
        width: 100%;
        height: 35px;
        border-radius: 10px;
        border: 1px solid var(--border-color);
        padding: 0 10px;
        margin: 10px 0;
        outline: none;
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    .editprofile__save-btn-wrapper{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 10px;
        padding: 20px 40px;
    }
    .editprofile__save-btn{
        background-color: var(--color3);
        color: var(--color1);
        padding: 10px 20px;
        border-radius: 3px;
        border: 0px;
    }
    .editprofile__message-textarea{
        width: 100%;
        padding: 5px 10px;
        border-radius: 10px;
        border: 1px solid var(--border-color);
        outline: none;
        margin: 10px 0;
    }
    .editprofile__file-input{
        position: absolute;
        top: 35px;
        right: -110px;
        z-index: 1;
        opacity: 0;
    }
    .editprofile__profile-wrapper{
        display: flex;
        align-items: center;
    }
    .editprofile__img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
    }
</style>
<template>
    <!-- <teleport to="body"> -->
    <div class="setting__wrapper">
       <div class="setting__header">
           <div class="setting__tittle-wrapper">
                <svg class="setting__icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M452.515 237l31.843-18.382c9.426-5.441 13.996-16.542 11.177-27.054-11.404-42.531-33.842-80.547-64.058-110.797-7.68-7.688-19.575-9.246-28.985-3.811l-31.785 18.358a196.276 196.276 0 0 0-32.899-19.02V39.541a24.016 24.016 0 0 0-17.842-23.206c-41.761-11.107-86.117-11.121-127.93-.001-10.519 2.798-17.844 12.321-17.844 23.206v36.753a196.276 196.276 0 0 0-32.899 19.02l-31.785-18.358c-9.41-5.435-21.305-3.877-28.985 3.811-30.216 30.25-52.654 68.265-64.058 110.797-2.819 10.512 1.751 21.613 11.177 27.054L59.485 237a197.715 197.715 0 0 0 0 37.999l-31.843 18.382c-9.426 5.441-13.996 16.542-11.177 27.054 11.404 42.531 33.842 80.547 64.058 110.797 7.68 7.688 19.575 9.246 28.985 3.811l31.785-18.358a196.202 196.202 0 0 0 32.899 19.019v36.753a24.016 24.016 0 0 0 17.842 23.206c41.761 11.107 86.117 11.122 127.93.001 10.519-2.798 17.844-12.321 17.844-23.206v-36.753a196.34 196.34 0 0 0 32.899-19.019l31.785 18.358c9.41 5.435 21.305 3.877 28.985-3.811 30.216-30.25 52.654-68.266 64.058-110.797 2.819-10.512-1.751-21.613-11.177-27.054L452.515 275c1.22-12.65 1.22-25.35 0-38zm-52.679 63.019l43.819 25.289a200.138 200.138 0 0 1-33.849 58.528l-43.829-25.309c-31.984 27.397-36.659 30.077-76.168 44.029v50.599a200.917 200.917 0 0 1-67.618 0v-50.599c-39.504-13.95-44.196-16.642-76.168-44.029l-43.829 25.309a200.15 200.15 0 0 1-33.849-58.528l43.819-25.289c-7.63-41.299-7.634-46.719 0-88.038l-43.819-25.289c7.85-21.229 19.31-41.049 33.849-58.529l43.829 25.309c31.984-27.397 36.66-30.078 76.168-44.029V58.845a200.917 200.917 0 0 1 67.618 0v50.599c39.504 13.95 44.196 16.642 76.168 44.029l43.829-25.309a200.143 200.143 0 0 1 33.849 58.529l-43.819 25.289c7.631 41.3 7.634 46.718 0 88.037zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 144c-26.468 0-48-21.532-48-48 0-26.467 21.532-48 48-48s48 21.533 48 48c0 26.468-21.532 48-48 48z"></path>
                </svg>
                <h5 class="setting__tittle"> Settings </h5>
           </div>
           <div @click.stop="closeSettingOverlay" class="setting__icon-wrapper">
                <svg class="setting__icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                </svg>
           </div>
       </div>
        <div class="addgroup__form-containt">
            <div class="setting__input-wrapper">
                <div>
                    <ul class="setting__tabs-name-list">
                        <li @click="activTab(1)" class="profile__tabs-name-item" :class="{ active : active_el === 1}">Account</li>
                        <li @click="activTab(2)" class="profile__tabs-name-item" :class="{ active : active_el === 2 }">Notification</li>
                        <li @click="activTab(3)" class="profile__tabs-name-item" :class="{ active : active_el === 3 }">Security</li>
                    </ul>
                </div>
                <div v-if="accountTab">
                    <ToggleBtn lable="Allow connected contacts" @change="settingBtns($event, 'Allow connected contacts')"></ToggleBtn>
                    <ToggleBtn lable="Profile privacy" @change="settingBtns($event, 'Profile privacy')"></ToggleBtn>
                    <ToggleBtn lable="Developer mode options" @change="settingBtns($event, 'Developer mode options')"></ToggleBtn>
                    <ToggleBtn lable="Two-step security verification" @change="settingBtns($event, 'Two-step security verification')"></ToggleBtn>
                </div>
                <div v-if="NotificationTab">
                    <ToggleBtn lable="Allow mobile notifications" @change="settingBtns($event, 'Allow mobile notifications')"></ToggleBtn>
                    <ToggleBtn lable="Notifications from your friends" @change="settingBtns($event, 'Notifications from your friends')"></ToggleBtn>
                    <ToggleBtn lable="Send notifications by email" @change="settingBtns($event, 'Developer mode options')"></ToggleBtn>
                </div>
                <div v-if="SecurityTab">
                    <ToggleBtn lable="Suggest changing passwords every month." @change="settingBtns($event, 'Suggest changing passwords every month.')"></ToggleBtn>
                    <ToggleBtn lable="Let me know about suspicious entries to your account" @change="settingBtns($event, 'Let me know about suspicious entries to your account')"></ToggleBtn>
                </div>
            </div>
            <div class="setting__save-btn-wrapper">
                <button class="setting__save-btn">Save</button>
            </div>
        </div>
    </div>
    <!-- </teleport> -->
</template>
<script>
import ToggleBtn from './global/ToggleBtn';
export default {
    components:{
        ToggleBtn
    },
    data(){
        return{
            accountTab:true,
            NotificationTab :false,
            SecurityTab :false,
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
                this.accountTab = true;
                this.NotificationTab = false;
                this.SecurityTab = false;
            }else if(el == 2){
                this.accountTab = false;
                this.NotificationTab = true;
                this.SecurityTab = false;
            }else{
                this.accountTab = false;
                this.NotificationTab = false;
                this.SecurityTab = true;
            }
            this.active_el = el;
            
        },
    }
}
</script>
<style lang="scss" scoped>
     @import '../design';

    .setting__wrapper{
        width: 100%;
        height: 100%;
        background-color: var(--color1);

        @include above('tablet'){
            width: 500px;
            height: auto;
            border-radius: 10px;
        }
    }

    .setting__header{
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
    .setting__tittle-wrapper{
        display: flex;
        align-items: center;
    }
    .setting__tittle{
        font-size: 18px;
        margin-left: 10px;
    }
    .setting__icon-wrapper{
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
    .setting__icon{
        width: 18px;
        height: 18px;
        color: var(--color1);
    }
    .addgroup__form-containt{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: calc(100% - 12%);
        @include above('tablet'){
           height:auto; 
        }
    }
    .setting__input-wrapper{
        padding: 40px;
        width: 100%;
        @include above('tablet'){
           height:auto; 
        }
       
    }
    .setting__tabs-name-list{
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
        color: var(color2);
    }
    .setting__save-btn-wrapper{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 20px 40px;
    }
    .setting__save-btn{
        background-color: var(--color3);
        color: var(--color1);
        padding: 10px 20px;
        border-radius: 3px;
        border: 0px;
    }
    
</style>
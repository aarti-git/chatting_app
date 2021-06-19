<template>
    <!-- <teleport to="body"> -->
    <div class="setting__wrapper">
       <div class="setting__header">
           <div class="setting__tittle-wrapper">
                <svg class="setting__icon" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="currentColor" d="M632 224h-88v-88c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v88h-88c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h88v88c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-88h88c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-318.4 64c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
                </svg>
                <h5 class="setting__tittle"> Setting </h5>
           </div>
           <div @click.stop="closeSettingOverlay">
                <svg class="setting__icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                </svg>
           </div>
       </div>
       <div class="setting__input-wrapper">
            <div>
                <ul class="setting__tabs-name-list">
                    <li @click="accountTab" class="profile__tabs-name-item active-tab">Account</li>
                    <li @click="NotificationTab" class="profile__tabs-name-item ">Notification</li>
                    <li @click="SecurityTab" class="profile__tabs-name-item ">Security</li>
                </ul>
            </div>
            <div v-if="accountTabContaint">
                <ToggleBtn lable="Allow connected contacts" @change="settingBtns($event, 'Allow connected contacts')"></ToggleBtn>
                <ToggleBtn lable="Profile privacy" @change="settingBtns($event, 'Profile privacy')"></ToggleBtn>
                <ToggleBtn lable="Developer mode options" @change="settingBtns($event, 'Developer mode options')"></ToggleBtn>
                <ToggleBtn lable="Two-step security verification" @change="settingBtns($event, 'Two-step security verification')"></ToggleBtn>
            </div>
             <div v-if="NotificationTabContaint">
                <ToggleBtn lable="Allow mobile notifications" @change="settingBtns($event, 'Allow mobile notifications')"></ToggleBtn>
                <ToggleBtn lable="Notifications from your friends" @change="settingBtns($event, 'Notifications from your friends')"></ToggleBtn>
                <ToggleBtn lable="Send notifications by email" @change="settingBtns($event, 'Developer mode options')"></ToggleBtn>
            </div>
            <div v-if="SecurityTabContaint">
                <ToggleBtn lable="Suggest changing passwords every month." @change="settingBtns($event, 'Suggest changing passwords every month.')"></ToggleBtn>
                <ToggleBtn lable="Let me know about suspicious entries to your account" @change="settingBtns($event, 'Let me know about suspicious entries to your account')"></ToggleBtn>
            </div>
            <button class="setting__save-btn">Save</button>
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
            accountTabContaint:true,
            NotificationTabContaint :false,
            SecurityTabContaint :false
        }
    },
    methods:{
        closeSettingOverlay(){
            this.$emit('close')
        },
        settingBtns(state, type){
                console.log(state, type)
        },
        accountTab(){
            this.accountTabContaint = true;
            this.NotificationTabContaint = false;
            this.SecurityTabContaint = false;
        },
        NotificationTab(){
            this.accountTabContaint = false;
            this.NotificationTabContaint = true;
            this.SecurityTabContaint = false;
        },
        SecurityTab(){
            this.accountTabContaint = false;
            this.NotificationTabContaint = false;
            this.SecurityTabContaint = true;
        }
    }
}
</script>
<style lang="scss" scoped>
    .setting__wrapper{
        width: 500px;
        background-color: var(--color1);
        border-radius: 10px;
    }
    .setting__header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color3);
        color: var(--color1);
        padding: 25px 20px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .setting__tittle-wrapper{
        display: flex;
        align-items: center;
    }
    .setting__tittle{
        font-size: 18px;
        margin-left: 10px;
    }
    .setting__icon{
        width: 18px;
        height: 18px;
        color: var(--color1);
    }
    .setting__input-wrapper{
        padding: 40px;
    }
    .setting__tabs-name-list{
        list-style: none;
        display: flex;
        justify-content: center;
        padding: 20px 0;
    }
    .active-tab {
        color: var(--color3) !important;
        border-bottom: 2px solid var(--color3);
    }
    .profile__tabs-name-item {
        font-size: 14px;
        padding: 5px 10px;
        cursor: pointer;
    }
    .setting__save-btn{
        background-color: var(--color3);
        color: var(--color1);
        padding: 5px 10px;
    }
    
</style>
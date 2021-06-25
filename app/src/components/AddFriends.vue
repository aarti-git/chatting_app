<template>
    <!-- <teleport to="body"> -->
    <div class="addfriends__wrapper">
       <div class="addfriends__header">
           <div class="addfriends__tittle-wrapper">
                <svg class="addfriends__icon" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="currentColor" d="M632 224h-88v-88c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v88h-88c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h88v88c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-88h88c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-318.4 64c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
                </svg>
                <h5 class="addfriends__tittle"> Add Friends </h5>
           </div>
           <div @click.stop="closeOverlay">
                <svg class="addfriends__icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                </svg>
           </div>
       </div>
       <div class="addgroup__form-containt">
            <div class="addfriends__input-wrapper">
                    <div class="addfriends__input-parent">
                        <label class="addfriends__lable">Emial Address</label>
                        <input type="text" class="addfriends__input" >
                    </div>
                    <div>
                        <label class="addfriends__lable">Invitation message</label>
                        <textarea  class="addfriends__message-textarea" rows="3" name="comment" form="usrform" placeholder=" Enter text here..."></textarea>
                    </div>
            </div>
            <div class="addfriends__save-btn-wrapper">
                <button class="addfriends__save-btn">Save</button>
            </div>
       </div>
    </div>
    <!-- </teleport> -->
</template>
<script>
export default {
    methods:{
        closeOverlay(){
            this.$emit('close')
        }
    }
}
</script>
<style lang="scss" scoped>

    @import '../design';

    .addfriends__wrapper{
        width: 100%;
        height: 100%;
        background-color: var(--color1);

        @include above('tablet'){
            width: 500px;
            height: auto;
            border-radius: 10px;
        }
    }
    .addfriends__header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color3);
        color: var(--color1);
        padding: 25px 20px;
        @include above('tablet'){
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
    }
    .addfriends__tittle-wrapper{
        display: flex;
        align-items: center;
    }
    .addfriends__tittle{
        font-size: 18px;
        margin-left: 10px;
    }
    .addfriends__icon{
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
    .addfriends__input-wrapper{
        padding: 40px;
    }
    .addfriends__lable{
        font-size: 15px;
    }
    .addfriends__input-parent{
        position: relative;
        margin-bottom: 20px;
    }
    .addfriends__input{
        width: 100%;
        height: 35px;
        border-radius: 10px;
        border: 1px solid var(--border-color);
        padding: 0 10px;
        margin: 10px 0;
        outline: none;
    }
    .addfriends__message-textarea{
        width: 100%;
        padding: 5px 10px;
        border-radius: 10px;
        border: 1px solid var(--border-color);
        outline: none;
        margin: 10px 0;
    }
    .addfriends__save-btn-wrapper{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 10px;
        padding: 20px 40px;
    }
    .addfriends__save-btn{
        background-color: var(--color3);
        color: var(--color1);
        padding: 10px 20px;
        border-radius: 3px;
        border: 0px;
    }
    
</style>
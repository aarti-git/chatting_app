<template>
    <!-- <teleport to="body"> -->
    <div class="addgroup__wrapper">
       <div class="addgroup__header">
           <div class="addgroup__tittle-wrapper">
                <svg class="addgroup__icon" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="currentColor" d="M632 224h-88v-88c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v88h-88c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h88v88c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-88h88c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-318.4 64c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
                </svg>
                <h5 class="addgroup__tittle"> Add Group </h5>
           </div>
           <div @click.stop="closeOverlay">
                <svg class="addgroup__icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                </svg>
           </div>
       </div>
       <div class="addgroup__input-wrapper">
            <div class="addgroup__input-parent">
                <label class="addgroup__lable">Group Name</label>
                <input type="text" class="addgroup__input" >
                <div class="addgroup__imoji-icon-parent">
                    <svg class="addgroup__imoji-icon" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="smile-beam" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path fill="currentColor" d="M168 205.4c12.3 0 23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.3 3.7 2.1 7.2 5.7 8.3 3.4 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.8 19.2-21.6 31.5-21.6zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216zm80-304c-23.8 0-52.7 29.3-56 71.4-.3 3.7 2.1 7.2 5.7 8.3 3.4 1.1 7.4-.5 9.3-3.7l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c2.1 3.7 6.2 4.7 9.3 3.7 3.6-1.1 6-4.5 5.7-8.3-3.3-42.1-32.2-71.4-56-71.4zm10.2 157.8C315.8 352.6 282.9 368 248 368s-67.8-15.4-90.2-42.2c-5.7-6.8-15.8-7.7-22.5-2-6.8 5.7-7.7 15.7-2 22.5C161.7 380.4 203.6 400 248 400s86.3-19.6 114.8-53.8c5.7-6.8 4.8-16.9-2-22.5-6.9-5.6-16.9-4.7-22.6 2.1z"></path>
                    </svg>
                </div>
            </div>
            <div>
                <label class="addgroup__lable">Add Member</label>
                <input type="name" class="addgroup__input" >
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
    .addgroup__wrapper{
        width: 500px;
        background-color: var(--color1);
        border-radius: 10px;
    }
    .addgroup__header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color3);
        color: var(--color1);
        padding: 25px 20px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .addgroup__tittle-wrapper{
        display: flex;
        align-items: center;
    }
    .addgroup__tittle{
        font-size: 18px;
        margin-left: 10px;
    }
    .addgroup__icon{
        width: 18px;
        height: 18px;
        color: var(--color1);
    }
    .addgroup__imoji-icon-parent{
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
    .addgroup__imoji-icon{
        width: 16px;
        height: 16px;
        color: var(--color2);
    }
    .addgroup__input-wrapper{
        padding: 40px;
    }
    .addgroup__lable{
        font-size: 15px;
    }
    .addgroup__input-parent{
        position: relative;
        margin-bottom: 20px;
    }
    .addgroup__input{
        width: 100%;
        height: 35px;
        border-radius: 10px;
        border: 1px solid var(--border-color);
        padding: 0 10px;
        margin: 10px 0;
        outline: none;
    }
    
</style>
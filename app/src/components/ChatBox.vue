<template>
    <div class="chat-box">
        <div class='chat-box__header'>
            <img class="chat-item__profile-img" src="../assets/image/yogesh.jpg">
            <div class="chat-box__parent">
                <div class="chat-box__user-info">
                    <p class="chat-box__user-name"> Townsend Seary</p>
                    <i class="chat-box__active-time">5 minutes ago</i>
                </div>
                <div class="chat-box__media-options">
                    <div class="chat-box__icon-parent">
                        <svg class="chat-box__icons chat-box__call-icon" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="phone-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M493.09 351.3L384.7 304.8a31.36 31.36 0 0 0-36.5 8.9l-44.1 53.9A350 350 0 0 1 144.5 208l53.9-44.1a31.35 31.35 0 0 0 8.9-36.49l-46.5-108.5A31.33 31.33 0 0 0 125 .81L24.2 24.11A31.05 31.05 0 0 0 0 54.51C0 307.8 205.3 512 457.49 512A31.23 31.23 0 0 0 488 487.7L511.19 387a31.21 31.21 0 0 0-18.1-35.7zM456.89 480C222.4 479.7 32.3 289.7 32.1 55.21l99.6-23 46 107.39-72.8 59.5C153.3 302.3 209.4 358.6 313 407.2l59.5-72.8 107.39 46z"></path>
                        </svg>
                    </div>
                    <div class="chat-box__icon-parent">
                        <svg class="chat-box__icons chat-box__call-video" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor" d="M543.9 96c-6.2 0-12.5 1.8-18.2 5.7L416 171.6v-59.8c0-26.4-23.2-47.8-51.8-47.8H51.8C23.2 64 0 85.4 0 111.8v288.4C0 426.6 23.2 448 51.8 448h312.4c28.6 0 51.8-21.4 51.8-47.8v-59.8l109.6 69.9c5.7 4 12.1 5.7 18.2 5.7 16.6 0 32.1-13 32.1-31.5v-257c.1-18.5-15.4-31.5-32-31.5zM384 400.2c0 8.6-9.1 15.8-19.8 15.8H51.8c-10.7 0-19.8-7.2-19.8-15.8V111.8c0-8.6 9.1-15.8 19.8-15.8h312.4c10.7 0 19.8 7.2 19.8 15.8v288.4zm160-15.7l-1.2-1.3L416 302.4v-92.9L544 128v256.5z"></path>
                        </svg>
                    </div>
                    <div class="chat-box__icon-parent">
                        <svg class="chat-box__icons" aria-hidden="true" focusable="false" data-prefix="far" data-icon="ellipsis-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"></path>
                        </svg>
                    </div>
                    <div class="chat-box__dopdown-btn">
                        <ul class="chat-box__dopdown-list">
                            <li class="chat-box__list-item">Profile</li>
                            <li class="chat-box__list-item">Add to archive</li>
                            <li class="chat-box__list-item">Delet</li>
                            <li class="chat-box__list-item">Block</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- text area -->
        <!-- <div class="chat-box__textarea"> -->
            <div class="chat-box__message-parent">
                <div class="chat-box__message-item">
                    <div class="chat-box__user">
                        <img class="chat-item__profile-img" src="../assets/image/yogesh.jpg">
                        <div>
                            <p class="chat-box__user-name"> Townsend Seary</p>
                            <i class="chat-box__active-time">10.20 AM</i>
                        </div>
                    </div>
                    <div class="chat-box__message">how are you doing?</div>
                </div>
                <div class="chat-box__message-right">
                    <div class="chat-box__message-item">
                        <div class="chat-box__user">
                            <img class="chat-item__profile-img" src="../assets/image/aarti.jpg">
                            <div>
                                <p class="chat-box__user-name"> Townsend Seary</p>
                                <i class="chat-box__active-time">10.20 AM</i>
                            </div>
                        </div>
                        <div class="chat-box__message chat-box__messege-by-me">i am fine. what about you?</div>
                    </div>
                </div>
                <div class="chat-box__message-item">
                    <div class="chat-box__user">
                        <img class="chat-item__profile-img" src="../assets/image/yogesh.jpg">
                        <div>
                            <p class="chat-box__user-name"> Townsend Seary</p>
                            <i class="chat-box__active-time">10.20 AM</i>
                        </div>
                    </div>
                    <div class="chat-box__message">what are u doing tody ? any plance ?</div>
                </div>
                <div class="chat-box__message-right">
                    <div class="chat-box__message-item">
                        <div class="chat-box__user">
                            <img class="chat-item__profile-img" src="../assets/image/aarti.jpg">
                            <div>
                                <p class="chat-box__user-name"> Townsend Seary</p>
                                <i class="chat-box__active-time">10.20 AM</i>
                            </div>
                        </div>
                        <div class="chat-box__message chat-box__messege-by-me">i am fine. what about you?</div>
                    </div>
                </div>
                 <div class="chat-box__message-item">
                    <div class="chat-box__user">
                        <img class="chat-item__profile-img" src="../assets/image/yogesh.jpg">
                        <div>
                            <p class="chat-box__user-name"> Townsend Seary</p>
                            <i class="chat-box__active-time">10.20 AM</i>
                        </div>
                    </div>
                    <div class="chat-box__message">what are u doing tody ? any plance ?</div>
                </div>
                 <div class="chat-box__message-item">
                    <div class="chat-box__message">what are u doing tody ?</div>
                </div>
            </div>
        <!-- </div> -->
        <!-- textarea -->
            <div>
                <div class="textarea">
                    <div class="chat-box__icons-parent">
                        <svg class="chat-box__icons" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="smile" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216zm90.2-146.2C315.8 352.6 282.9 368 248 368s-67.8-15.4-90.2-42.2c-5.7-6.8-15.8-7.7-22.5-2-6.8 5.7-7.7 15.7-2 22.5C161.7 380.4 203.6 400 248 400s86.3-19.6 114.8-53.8c5.7-6.8 4.8-16.9-2-22.5-6.8-5.6-16.9-4.7-22.6 2.1zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"></path>
                        </svg>
                    </div>
                    <div class="chat-box__textarea-parent">
                        <input type="text" placeholder="Write a message." class="chat-box__textarea">
                    </div>
                    <div class="chat-box__icons-parent">
                        <svg class="chat-box__icons" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="paperclip" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M149.106 512c-33.076 0-66.153-12.59-91.333-37.771-50.364-50.361-50.364-132.305-.002-182.665L319.842 29.498c39.331-39.331 103.328-39.331 142.66 0 39.331 39.332 39.331 103.327 0 142.657l-222.63 222.626c-28.297 28.301-74.347 28.303-102.65 0-28.3-28.301-28.3-74.349 0-102.649l170.301-170.298c4.686-4.686 12.284-4.686 16.97 0l5.661 5.661c4.686 4.686 4.686 12.284 0 16.971l-170.3 170.297c-15.821 15.821-15.821 41.563.001 57.385 15.821 15.82 41.564 15.82 57.385 0l222.63-222.626c26.851-26.851 26.851-70.541 0-97.394-26.855-26.851-70.544-26.849-97.395 0L80.404 314.196c-37.882 37.882-37.882 99.519 0 137.401 37.884 37.881 99.523 37.882 137.404.001l217.743-217.739c4.686-4.686 12.284-4.686 16.97 0l5.661 5.661c4.686 4.686 4.686 12.284 0 16.971L240.44 474.229C215.26 499.41 182.183 512 149.106 512z"></path>
                        </svg>
                    </div>
                    <div class="chat-box__icons-parent chat-box__send-icons">
                        <svg class="chat-box__icons" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z"></path>
                        </svg>
                    </div>
                </div>
            </div>  
        </div>
</template>

<style lang="scss">
    @import '../design';

    .chat-box{
        display: flex;
        flex-direction: column;
        flex: 1 1;
        position: relative;
        height: 100vh;
    }
    .chat-box__header{
        display: flex;
        align-items: center;
        border-bottom: 1px solid color('light-grey');
        padding: 20px 30px;
    }
    .chat-box__parent{
        display: flex;
        justify-content: space-between;
        flex-grow: 1;
    }
    .chat-item__profile-img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border:0;
        margin-right: 10px;
        vertical-align: middle;
    }
    .chat-box__user-name{
        font-size: 18px ;
    }
    .chat-box__active-time{
        font-size: 11px;
    }
    .chat-box__media-options{
         display: flex;
    }
    .chat-box__icon-parent{
       width: 45px;
        height: 35px;
        border: 1px solid;
        align-items: center;
        margin: 0 5px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
    }
    .chat-box__icons{
        width: 16px;
        height: 16px;
    }
    .chat-box__call-icon{
        color: color('green');
    }
    .chat-box__call-video{
        color: color('light-orange')
    }
    .chat-box__dopdown-btn{
        // display: none;
        position: absolute;
        top: 56px;
        right: 30px;
        padding: 20px 30px;
        border: 0;
        z-index: 1;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 8px #0000001f;
    }
    .chat-box__dopdown-list{
        list-style: none;
        padding: 0;
    }
    .chat-box__list-item{
        padding: 5px 0;
    }

    // message

    .chat-box__message-parent{
        width: 100%;
        height: auto;
        padding: 30px;
        overflow: auto;
        flex: 1 1 100%;
    }
    .chat-box__message-parent::-webkit-scrollbar{
        display: none;
    }
    .chat-box__message-right{
        display: flex;
        justify-content: flex-end;
    }
    .chat-box__message-item{
        width: 30%;
        margin: 15px 0 ;
    }
    .chat-box__message{
        background-color: color('light-grey');
        padding: 10px 20px;
        margin: 15px 0 0;
        border-radius: 5px;
        font-size: 14px;
    }
    .chat-box__messege-by-me{
         background-color: color('app-main');
         color: color('sand');
    }
    .chat-box__user{
        display: flex;
    }

    // text input
    .textarea{
        display: flex;
        align-items: center;
        padding: 20px 30px;
        border-top: 1px solid gainsboro;
        width: 100%;
        justify-content: center;
    }
    .chat-box__textarea-parent{
        width: calc(100% - 20%);
        margin: 0 5px ;

    }
    .chat-box__textarea{
        width: 100%;
        height: 35px;
        border-radius: 10px;
        border: 1px solid color('light-grey');   
    }
    .chat-box__icons-parent{
        width: 45px;
        height: 35px;
        border: 1px solid color('light-grey');
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 5px;
        border-radius: 5px;
        background-color: color('light-grey');
    }
    .chat-box__send-icons{
        background-color: color('app-main');
        color: color('sand');
    }


</style>
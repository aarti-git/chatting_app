<template>
     <div @click="openChatbox" class="chat-item">
		<div class="chat-item__list-wrapper">
			<img class="chat-item__profile-img" src="../assets/image/yogesh.jpg">
			<div class="chat-item__user-info">
				<div class="chat-item__user-name">
					<span class="chat-item__name">Yogesh Jagdale</span>
					<p class="chat-item__last-message">im fine...What up,how are you?up,how are you</p>
				</div>
				<div class="chat-item__message-time">
					<span class="chat-item__time">03:40 PM</span>
                    <svg  class="chat-item__svg-icons chat-item__option" aria-hidden="true" focusable="false" data-prefix="far" data-icon="ellipsis-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"></path>
                    </svg>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
    export default {
        methods:{
            openChatbox(){
                var chatBox = document.querySelector(".chat-box");
                var userList = document.querySelector(".user-list");
                chatBox.classList.remove("hide");
                userList.classList.add("hide");
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../design';

    .chat-item__list-wrapper{
        display: flex;
        align-items: center;
        padding: 12px 30px;
        border-bottom: 1px solid var(--border-color);
        @include above('tablet'){
            padding: 12px 20px;
        }
        @include above('desktop'){
            padding: 12px 30px;
        }
    }

	.chat-item__option {
		.chat-item__list-wrapper:hover & {
			opacity: 1;
			color: var(--color3);
		}
	}

    .chat-item__user-info{
        display: flex;
        flex-grow: 1;
        justify-content:space-between;
        align-items: baseline;
        min-width: 0;
    }
	.chat-item__profile-img{
		width: 40px;
        height: 40px;
        border-radius: 50%;
        border:0;
        margin-right: 10px;
        vertical-align: middle;

        @include above('tablet'){
            width: 35px;
            height: 35px;
        }
         @include above('desktop'){
            width: 40px;
            height: 40px;
        }
	}
    .chat-item__user-name{
        padding: 0 10px;
        line-height: 23px;
        min-width: 0;
    }
    .chat-item__name{
        font-size: 16px;
        font-weight:500;
        margin-bottom: 5px;
        color: var(--color2);
    }
    .chat-item__last-message{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
        color: var(--color4);
        @include above( 'tablet'){
            font-size: 13px;
        }
    }
    .chat-item__time{
        display: block;
        font-size: 11px;
        min-width: 50px;
        text-align: right;
        color: var(--color2);
    }
    .chat-item__option{
        opacity: 0;
    }
	.chat-item__svg-icons{
		width: 20px;
		height: 20px;
        cursor: pointer;
	}

</style>
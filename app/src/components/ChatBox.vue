<template>
	<div class="chat-box hide">
		<div class="chat-box__wrapper">
			<div class='chat-box__header'>
				<div class="chat-box__parent">
					<img class="chat-item__profile-img" src="../assets/image/yogesh.jpg">
					<div class="chat-box__user-info">
							<p class="chat-box__user-name"> Yogesh Jagdale</p>
							<i class="chat-box__active-time">5 minutes ago</i>
					</div>
				</div>
				<div class="chat-box__media-options">
					<IconButton>
						<svg class="chat-box__call-icon" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="phone-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path fill="currentColor" d="M493.09 351.3L384.7 304.8a31.36 31.36 0 0 0-36.5 8.9l-44.1 53.9A350 350 0 0 1 144.5 208l53.9-44.1a31.35 31.35 0 0 0 8.9-36.49l-46.5-108.5A31.33 31.33 0 0 0 125 .81L24.2 24.11A31.05 31.05 0 0 0 0 54.51C0 307.8 205.3 512 457.49 512A31.23 31.23 0 0 0 488 487.7L511.19 387a31.21 31.21 0 0 0-18.1-35.7zM456.89 480C222.4 479.7 32.3 289.7 32.1 55.21l99.6-23 46 107.39-72.8 59.5C153.3 302.3 209.4 358.6 313 407.2l59.5-72.8 107.39 46z"></path>
						</svg>
					</IconButton>
					<IconButton>
						<svg class="chat-box__call-video" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="video" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
							<path fill="currentColor" d="M543.9 96c-6.2 0-12.5 1.8-18.2 5.7L416 171.6v-59.8c0-26.4-23.2-47.8-51.8-47.8H51.8C23.2 64 0 85.4 0 111.8v288.4C0 426.6 23.2 448 51.8 448h312.4c28.6 0 51.8-21.4 51.8-47.8v-59.8l109.6 69.9c5.7 4 12.1 5.7 18.2 5.7 16.6 0 32.1-13 32.1-31.5v-257c.1-18.5-15.4-31.5-32-31.5zM384 400.2c0 8.6-9.1 15.8-19.8 15.8H51.8c-10.7 0-19.8-7.2-19.8-15.8V111.8c0-8.6 9.1-15.8 19.8-15.8h312.4c10.7 0 19.8 7.2 19.8 15.8v288.4zm160-15.7l-1.2-1.3L416 302.4v-92.9L544 128v256.5z"></path>
						</svg>
					</IconButton>
					<div @click="toggleOption">
						<IconButton>
							<svg class="chat-box__icons" aria-hidden="true" focusable="false" data-prefix="far" data-icon="ellipsis-h" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path fill="currentColor" d="M304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"></path>
							</svg>
					</IconButton>
					</div>
					<div class="chat-box__remove-icon " @click="removeChatbox">
						<IconButton>
							<svg class="chat-box__icons chat-box__remove-btn" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
								<path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path>
							</svg>
						</IconButton>
					</div>
					<div v-if="showOption" class="chat-box__dopdown-btn">
						<ul class="chat-box__dopdown-list">
							<li 
								class="chat-box__list-item"
								v-for="option in moreOptions"
								:key="option.title" @click="openProfile(option.click)"
							>{{ option.title}}</li>
						</ul>
					</div>
				</div>
			</div>
			<!-- text area -->
			<div class="chat-box__message-parent">
				<div 
					v-for="(item, index) in chats"
					:key="index"
					:class="['chat-box__messages',{
						'chat-box__my-message': item.type === 0,
					}]"
				>
					<div class="chat__box-msg-wrapper">
						<!-- <div
						:class="['chat-box__user',{
						'chat-box__user-containt': item.type === 0,
						}]"
						>
							<img class="chat-item__profile-img" :src="item.img">
							<div>
								<p class="chat-box__user-name">{{ item.name }}</p>
								<i class="chat-box__active-time">{{ item.time }}</i>
							</div>
						</div> -->
						<div
							v-for="(message, index) in item.messages"
								:key="index"
							:class="['chat-box__item-wrapper',{
							'chat-box__item-wrapper--me': item.type === 0,
							}]"
						>
							<div 
								:class="['chat-box__item',{
									'chat-box__item--other': item.type === 1,
									'chat-box__item--me': item.type === 0,
								}]"
								v-text="message.value"
							></div>
							<span v-text="message.time" class="chat-box__item-time"></span>
						</div>
					</div>
				</div>
			</div>
		
			<!-- textarea -->
				<div>
					<div class="chat-box__textarea">
						<div class="chat-box__icons-parent">
							<svg class="chat-box__icons" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="smile" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
								<path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216zm90.2-146.2C315.8 352.6 282.9 368 248 368s-67.8-15.4-90.2-42.2c-5.7-6.8-15.8-7.7-22.5-2-6.8 5.7-7.7 15.7-2 22.5C161.7 380.4 203.6 400 248 400s86.3-19.6 114.8-53.8c5.7-6.8 4.8-16.9-2-22.5-6.8-5.6-16.9-4.7-22.6 2.1zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"></path>
							</svg>
						</div>
						<div class="chat-box__textarea-parent">
							<input type="text" v-model="message" placeholder="Write a message!!" class="chat-box__textarea-input"  @keyup.enter="sendMsg">
						</div>
						<div class="chat-box__icons-parent-wrpper" >
							<div class="chat-box__icons-parent">
								<svg class="chat-box__icons" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="paperclip" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path fill="currentColor" d="M149.106 512c-33.076 0-66.153-12.59-91.333-37.771-50.364-50.361-50.364-132.305-.002-182.665L319.842 29.498c39.331-39.331 103.328-39.331 142.66 0 39.331 39.332 39.331 103.327 0 142.657l-222.63 222.626c-28.297 28.301-74.347 28.303-102.65 0-28.3-28.301-28.3-74.349 0-102.649l170.301-170.298c4.686-4.686 12.284-4.686 16.97 0l5.661 5.661c4.686 4.686 4.686 12.284 0 16.971l-170.3 170.297c-15.821 15.821-15.821 41.563.001 57.385 15.821 15.82 41.564 15.82 57.385 0l222.63-222.626c26.851-26.851 26.851-70.541 0-97.394-26.855-26.851-70.544-26.849-97.395 0L80.404 314.196c-37.882 37.882-37.882 99.519 0 137.401 37.884 37.881 99.523 37.882 137.404.001l217.743-217.739c4.686-4.686 12.284-4.686 16.97 0l5.661 5.661c4.686 4.686 4.686 12.284 0 16.971L240.44 474.229C215.26 499.41 182.183 512 149.106 512z"></path>
								</svg>
							</div>
							<div class="chat-box__icons-parent chat-box__send-icons" @click="sendMsg">
								<svg class="chat-box__icons" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
									<path fill="currentColor" d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z"></path>
								</svg>
							</div>
						</div>
					</div>
				</div>  
			</div>
		</div>
</template>

<script>
import IconButton from './global/IconButton'
export default {
	components: {
		IconButton
	},
	
	data() {
		return {
			moreOptions: [
				{
					title:'Profile',
					click:1
				},
				{
					title:'Delete',
					click:2
				},
				{
					title:'Block',
					click:3
				}
			],
			message: '',
			showOption: false,
			chats:[{
				"type": 1,
				"messages": [{
					"value": "hi",
					"type": 0,
					"time": "10.20 AM"
				},
				{
					"value": "how are you?",
					"type": 0,
					"time": "10.22 AM"
				}]
			}, {
				"type": 0,
				"messages": [{
					"value": "hi",
					"type": 0,
					"time": "10.20 AM"
				},
				{
					"value": "i am fine. how are you?",
					"type": 0,
					"time": "10.22 AM"
				}]
			},{
				"type": 1,
				"messages": [{
					"value": "i am good",
					"type": 0,
					"time": "10.20 AM"
				},
				{
					"value": "what are u doing tody?",
					"type": 0,
					"time": "10.26 AM"
				}]
			},{
				"img": "/img/aarti.jpg",
				"name": "Aarti Jagdale",
				"type": 0,
				"time": "10:20 AM",
				"messages": [{
					"value": "nothing",
					"type": 0,
					"time": "10.20 AM"
				},{
					"value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra dui quis erat cursus, vitae ultrices erat sodales. Cras ultricies dictum libero nec euismod.",
					"type": 0,
					"time": "10.26 AM"
				}]
			}]
		}
	},

	methods: {
		toggleOption() {
			this.showOption = !this.showOption
		},
		removeChatbox(){
			let chatBox = document.querySelector(".chat-box");
			let userList =document.querySelector(".user-list");
			chatBox.classList.add("hide");
			userList.classList.remove("hide");
		},
		openProfile(number){
			if(number == 1){
			   let profile = document.querySelector(".profile") ;
			   let dopdownBtn = document.querySelector(".chat-box__dopdown-btn") 
			   profile.style.display="block";
			   dopdownBtn.style.display="none";
			}
			console.log(number)
		},
		sendMsg(){
			if(this.message){
				let x =	this.chats[this.chats.length-1].messages;
				x.push({value: this.message});
				this.message = '';
				let chatBox = document.querySelector(".chat-box__message-parent") ;
				chatBox.scrollTop = chatBox.scrollHeight;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../design';
	.chat-box{
		width: 100%;
	}
	.chat-box__wrapper{
		display: flex;
		flex-direction: column;
		flex: 1 1;
		position: relative;
		height: 100vh;
		border-right: 1px solid var(--border-color);
	}
	.chat-box__header{
		display: block;
		border-bottom: 1px solid var(--border-color);
		padding: 15px 30px;

		@include above( 'tablet'){
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20px 30px;
		}
	}
	.chat-box__parent{
		display: flex;
		align-items: center;
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
		font-size: 13px ;
		color: var(--color2);

		@include above( 'tablet'){
			font-size: 16px ;
		}
	}
	.chat-box__active-time{
		font-size: 10px;
		color: var(--color2);
		 @include above( 'tablet'){
			font-size: 11px ;
		}
	}
	.chat-box__media-options{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 5px;
		width: 45%;
		margin-top: 15px;
		 @include above( 'tablet'){
			grid-gap: px;
			width: unset;
			margin-top:0;
		}
	}
	.chat-box__remove-icon{
		position: absolute;
		top: 8px;
		right:8px;
		@include above( 'tablet'){
			display: none;
		}
		
	}
	.chat-box__icons{
		width: 14px;
		height: 14px;
		@include above( 'tablet'){
			width: 16px;
			height: 16px;
		}
	}
	.chat-box__call-icon{
		color: var(--green);
	}
	.chat-box__call-video{
		color: var(--redOrange)
	}
	.chat-box__remove-btn{
		color: var(--red)
	}
	.chat-box__dopdown-btn{
		position: absolute;
		top: 56px;
		right: 30px;
		padding: 30px 0;
		border: 0;
		z-index: 1;
		background-color: var(--color1);
		border-radius: 10px;
		box-shadow: 0px 0px 8px #0000001f;
	}
	.chat-box__dopdown-list{
		list-style: none;
		padding: 0;
	}
	.chat-box__list-item{
		padding: 10px 50px;
		cursor: pointer;

		&:hover{
			background-color: var(--border-color);
		}
	}

	// message

	.chat-box__message-parent{
		width: 100%;
		height: auto;
		padding: 20px 30px 0;
		overflow: auto;
		flex: 1 1 100%;
	}
	.chat-box__message-parent::-webkit-scrollbar{
		display: none;
	}
	.chat__box-msg-wrapper{
		max-width: 60%;
	}
	.chat-box__messages{
		margin:15px 0 30px 0;
		display: flex;
		@include above( 'tablet'){
		  margin : 15px 0;
		}
	}
	.chat-box__my-message{
		justify-content: flex-end;
	}
	.chat-box__item-wrapper{
		display: flex;
		margin: 5px 0 0;
	}
	.chat-box__item-wrapper--me{
		justify-content: flex-end;
	}
	.chat-box__item{
		padding: 10px 20px;
		border-radius: 5px;
		font-size: 12px;
		@include above( 'tablet'){
			font-size: 14px;
		}
	}
	.chat-box__item-time{
		display: flex;
		align-items: flex-end;
		margin: 0 0 10px 5px;
		flex-shrink: 0;
		font-size: 10px;
		color: var(--border-color2);
		
	}
	.chat-box__item--other{
		background-color: var(--border-color);
		color: var(--color2);
		
	}
	.chat-box__item--me{
		background-color: var(--color3);
		color: var(--color1);
		order: 1;
		margin-left: 5px;
	}
	.chat-box__user{
		display: flex;
		margin-bottom: 10px;
		@include above( 'tablet'){
			margin-bottom: 15px;
		}
	}
	.chat-box__user-containt{
		justify-content: flex-end;
	}

	// text input
	.chat-box__textarea{
		display: flex;
		align-items: center;
		padding: 20px 30px;
		border-top: 1px solid var(--border-color);
		width: 100%;
		justify-content: space-between;

		> div {
			&:first-child {
				margin-left: 0;
			}
			
			&:last-child {
				margin-right: 0;
			}
		}
	}
	.chat-box__textarea-parent{
		width: calc(100% - 45%);
		margin: 0 5px ;
		 @include above( 'tablet'){
			width: calc(100% - 18%);
		 }
	}
	.chat-box__textarea-input{
		width: 100%;
		height: 35px;
		border-radius: 10px;
		border: 1px solid var(--border-color);  
		padding: 2px 20px;
		outline: none; 
	}
	.chat-box__icons-parent-wrpper{
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap:5px;
		@include above( 'tablet'){
			grid-gap:10px;
		}
	}
	.chat-box__icons-parent{
		width: 40px;
		height: 30px;
		border: 1px solid var(--border-color);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
		background-color: var(--border-color);
		cursor: pointer;
		 @include above( 'tablet'){
			width: 45px;
			height: 35px;
		 }
	}
	.chat-box__send-icons{
		background-color: var(--color3);
		color: var(--color1) !important;
	}


</style>
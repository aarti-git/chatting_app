<template>
    <div class="login">
        <div class="login__wrapper">
            <div class="login__app-logo-wrapper">
                <svg class="login__app-logo" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="comment-lines" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M280 272H136c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm96-96H136c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 384c-28.3 0-56.3-4.3-83.2-12.8l-15.2-4.8-13 9.2c-23 16.3-58.5 35.3-102.6 39.6 12-15.1 29.8-40.4 40.8-69.6l7.1-18.7-13.7-14.6C47.3 313.7 32 277.6 32 240c0-97 100.5-176 224-176s224 79 224 176-100.5 176-224 176z"></path>
                </svg>
            </div>
            <div class="login__form-containt">
                <h2 class="login__header">Sign in</h2>
                <div>
                    <input type="text" placeholder="Username or email"  class="login__input">
                    <input type="password" placeholder="Password"  class="login__input">
                </div>
                <div class="login__reset-wrapper">
                    <div class="login__checkbox-wrapper">
                        <input type="checkbox" class="login__checkbox" id="input">
                        <label for="input">Remember me</label>
                    </div>
                    <router-link to="/reset-password" class="login__reset">Reset password</router-link>
                </div>
                <button class="login__sign-btn">Sign in</button>
            </div>
            <div class="login__account-creat">
                <span class="login__account-qution">Don't have an account?</span>
                <button class="login__Register-btn"><router-link to="/register">Register now!</router-link></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .login{
        margin: 100px 0 100px;
    }
    .login__wrapper{
        width: 430px;
        margin:0 auto;
        padding: 3rem;
        border: 1px solid var(--border-color);
        border-radius: 5px;
        position: relative;
        background-color: var(--color1);
    }
    .login__app-logo-wrapper{
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color1);
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%)
    }
    .login__app-logo{
        width: 60px;
        height: 60px;
    }
    .login__form-containt{
        margin-top: 40px;
        border-bottom: 1px solid var(--border-color);
    }
    .login__header{
        text-align: center;
        font-size: 20px;
        margin-bottom: 30px;
        color: var(--color2)
    }
    .login__input{
        width: 100%;
        height: 35px;
        border-radius: 5px;
        border: 1px solid var(--border-color);
        padding: 3px 15px;
        margin: 12px 0;
        outline: none;
        font-size: 14px;
        color: var(--color2)
    }
    .login__reset-wrapper{
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding: 20px 0 ;
        font-size: 14px;
    }
    .login__checkbox-wrapper{
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .login__checkbox{
        margin-right: 5px;
    }
    .login__reset{
        text-decoration: none;
        color: var(--color2);
        cursor: pointer;
    }
    .login__sign-btn{
        width: 100%;
        padding: 8px 0 ;
        font-size: 15px;
        border-radius: 3px;
        border:0;
        background-color: var(--color3);
        color: var(--color1);
        margin: 5px 0 30px;
    }
    .login__account-creat{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .login__account-qution{
        font-size: 14px;
        color: var(--color4);
        font-weight: 100;
        margin: 30px 0 20px;
    }
    .login__Register-btn{
        background-color: var(--color1);
        border: 1px solid var(--border-color);
        padding: 7px 15px;
        border-radius: 5px;
        font-size: 14px;
    }
    .login__Register-btn a{
        text-decoration: none;
        color: var(--color2);
        cursor: pointer;
    }
</style>
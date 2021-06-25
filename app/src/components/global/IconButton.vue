<template>
    <div class="icon-button">
        <div class="icon-button__icon">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @import '../../design';

    .icon-button{
        width: 40px;
        height: 30px;
        border: 1px solid var(--border-color);
        align-items: center;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        background-color: var(--color1);

        @include above('tablet'){
            width: 40px;
            height: 32px;
        }
         @include above('desktop'){
            width: 45px;
            height: 35px;
        }

        &:hover{
            background-color: var(--border-color);
        }
    }
    .icon-button__icon{
        width: 14px;
        height: 14px;
        color: var(--color2);
        @include above( 'tablet'){
            width: 16px;
            height: 16px;
        }
    
    }
</style>
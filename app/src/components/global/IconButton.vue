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
.icon-button{
    width: 45px;
    height: 35px;
    border: 1px solid var(--lightGrey);
    align-items: center;
    margin: 0 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    cursor: pointer;
}
.icon-button__icon{
    width: 16px;
    height: 16px;
    color: var(--color2);
}
</style>
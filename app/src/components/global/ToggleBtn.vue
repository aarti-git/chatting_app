<template>
    <div class="toggle">
        <input type="checkbox" @change="onChange($event)" class="toggle__input" :id="id"/>                         
        <label class="toggle__btn" :for="id"></label>
        {{lable}}
    </div>
</template>
<script>
export default {
    name:"ToggleBtn",
    props: {
        lable: {
            type: String,
            default: ''
        },
    },
    
    computed: {
        id() {
            const random = Math.random() * 100
            return 'toggle-' + random.toFixed(2).replace('.', '')
        }
    },

    methods: {
        onChange(e) {
            this.$emit('change', e.currentTarget.checked)
        }
    }
}
</script>
<style lang="scss">
    .toggle{
        display: flex;
        align-items: center;
        position: relative;
        margin: 18px 0;
        font-size: 14px;
    }
    .toggle__input{
        display: none;
    }
    .toggle__btn{
        --toggle-knob-diff: 2px;
        display: flex;
        align-items: center;
        width: var(--toggle-width, 30px);
        height: var(--toggle-height, 15px);
        border-radius: var(--toggle-height, 15px);
        background-color: var(--color1);
        border: 1px solid var(--grey);
        margin-right: 10px;
        transition: background-color .1s ease;
        
        .toggle__input:checked + &{
            background-color: var(--color3);
            border-color: var(--color3);

            &::after{
                margin-left: calc((100% - calc(var(--toggle-height, 15px) - 5px)) - var(--toggle-knob-diff));
                background-color: var(--color1);
            }
        }

        &::after{
            display: block;
            content: "";
            width: calc(var(--toggle-height, 15px) - 5px);
            height: calc(var(--toggle-height, 15px) - 5px);
            border-radius: 50%;
            background-color: var(--grey);
            margin-left: var(--toggle-knob-diff);
            transition: margin .1s ease, background-color .1s ease;
        }
    }
    
</style>
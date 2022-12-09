<template>
    <button :type="btnType">
        <span class="shadow"></span>
        <span class="edge"></span>
        <span class="front text"><img v-if="icon" src="@/assets/images/icon/icon_edit.svg" alt="" class="me-2"> {{ $t(title) }} </span>
    </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        btnType: {
            type: String,
            default: "button"
        },
        title: {
            type: String,
            default: "Click"
        },
        icon: {
            type: Boolean,
            required: false
        }
    },
})
</script>
<style lang="scss" scoped>
button {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    transition: filter 250ms;
    user-select: none;
    touch-action: manipulation;

    &:hover {
        filter: brightness(110%);

        .front {
            transform: translateY(-6px);
            transition: transform
                250ms
                cubic-bezier(.3, .7, .4, 1.5);
        }

        .shadow {
            transform: translateY(4px);
            transition: transform
                250ms
                cubic-bezier(.3, .7, .4, 1.5);
        }
    }

    .edge {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        background: linear-gradient(
            to left,
            hsl(340deg 100% 16%) 0%,
            hsl(340deg 100% 32%) 8%,
            hsl(340deg 100% 32%) 92%,
            hsl(340deg 100% 16%) 100%
        );
    }

    .shadow {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        background: hsl(0deg 0% 0% / 0.25);
        will-change: transform;
        transform: translateY(2px);
        transition: transform
            600ms
            cubic-bezier(.3, .7, .4, 1);
    }

    .front {
        display: block;
        position: relative;
        padding: 12px 27px;
        border-radius: 12px;
        font-size: 1.1rem;
        color: white;
        background: hsl(345deg 100% 47%);
        will-change: transform;
        transform: translateY(-4px);
        transition: transform
            600ms
            cubic-bezier(.3, .7, .4, 1);
    }
}


button:active .front {
 transform: translateY(-2px);
 transition: transform 34ms;
}

button:active .shadow {
 transform: translateY(1px);
 transition: transform 34ms;
}

button:focus:not(:focus-visible) {
 outline: none;
}
</style>
<template>
  <button :type="btnType">
    <span class="shadow"></span>
    <span class="edge" :class="color"></span>
    <span class="front" :class="color">
      <font-awesome-icon :icon="icon" v-if="icon" class="me-3" />
      {{ $t(title) }} 
    </span>
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
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false,
      default: 'danger'
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
        &.danger {
          background: linear-gradient(
            to left,
            hsl(340deg 100% 16%) 0%,
            hsl(340deg 100% 32%) 8%,
            hsl(340deg 100% 32%) 92%,
            hsl(340deg 100% 16%) 100%
          );
        }
        &.primary {
          background: linear-gradient(
            to left,
            hsl(199deg 80% 47%) 0%,
            hsl(199deg 100% 32%) 8%,
            hsl(199deg 100% 32%) 92%,
            hsl(199deg 80% 47%) 100%
          );
        }
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
        font-weight: 600;
        color: white;
        will-change: transform;
        transform: translateY(-4px);
        transition: transform
            600ms
            cubic-bezier(.3, .7, .4, 1);
        &.danger {
          background: hsl(345deg 100% 47%);
        }
        &.primary {
          background: hsl(199deg 80% 47%);
        }
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
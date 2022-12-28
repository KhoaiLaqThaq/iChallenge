<template>
    <div class="mt-3">
        <div class="rightbar py-3">
            <div class="account__access">
                <div class="label">{{ $t('label.fastAccess') }}</div>
                <div class="access-items py-3">
                    <div class="notification">
                        <img src="@/assets/images/ring.png" width="20" height="20" alt="">
                        <span v-if="numNotification">{{ numNotification }}</span>
                        <span>{{ $t('label.notification') }}</span>
                    </div>
                    <div class="prioritized">
                        <img src="@/assets/images/star.png" width="20" height="20" alt="">
                        <span>{{ $t('label.created.prioritized') }}</span>
                    </div>
                </div>
            </div>

            <div class="account-network py-2">
                <div class="account-network__head d-inline">
                    <div class="label">{{ $t('label.friends') }}</div>
                    <div class="account-network__actions">
                        <div class="search"></div>
                        <div class="multi-action">
                            <img src="@/assets/images/multi_actions.png" width="24" height="24" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const numNotification = ref(0);

        return {
            numNotification
        }
    }
})
</script>
<style lang="scss" scoped>
.rightbar {
    height: calc(100vh - 58px);
    position: relative;
    width: 100%;
    text-align: left;
    padding-left: 50px;

    span {
        color: #777;
    }

    img {
        opacity: .5;
        margin-right: .75rem;
    }

    .label {
        color: #777;
        font-weight: 600;
    }

    .account__access {
        border-bottom: 1px solid #ccc;
        display: grid;

        .access-items {
            .notification, .prioritized {
                padding: 8px 15px;
                &:hover {
                    border-radius: 5px;
                    cursor: pointer;
                    background-color: #d0d0d075;
                }
            }
        }
    }

    .account-network {
        .account-network__head {
            display: inline-block;
            .label {
                display: block;
                float: left;
            }
            .account-network__actions {
                display: block;
                float: right;
            }
        }
    }
}
</style>
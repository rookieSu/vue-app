<template>
    <div>
        this is registerPage
        <a-button>
            <router-link to="/register/test">jumb to test</router-link>
        </a-button>
        <router-view></router-view>
    </div>
</template>

<script>
import { Button } from "ant-design-vue"
export default {
    name: "RegisterPage",
    component: {
        AButton: Button
    }
}
</script>
<template>
    <a-button>
        <rounter-link to="/login">jump to login</rounter-link>
    </a-button>
</template>

<script>
import { Button } from "ant-design-vue"
export default {
    name: "homePage",
    components: {
        AButton: Button
    }
}
</script>
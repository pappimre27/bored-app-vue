<template>
    <div class='text-center alert alert-danger'
    >
        <i class='fas fa-info-circle' v-bind:style="{color: '#dc3545' }"/>
        {{msg}}
    </div>
</template>

<script>
    export default {
        props: ['msg'],
        name: "Alert"
    }
</script>

<style scoped>

</style>
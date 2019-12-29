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
    .alert {
        padding: 0.7rem;
        margin: 1rem 0;
        opacity: 0.9;
        background: var(--light-color);
        color: #333;
    }

    .alert-primary {
        background: var(--primary-color);
        color: #fff;
    }

    .alert-light {
        background: var(--light-color);
        color: #333;
    }

    .alert-dark {
        background: var(--dark-color);
        color: #fff;
    }

    .alert-danger {
        color: var(--danger-color);
    }

    .alert-success {
        background: var(--success-color);
        color: #fff;
    }

    .alert-white {
        background: #fff;
        color: #333;
        border: #ccc solid 1px;
    }

</style>
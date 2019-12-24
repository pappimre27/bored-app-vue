<template>
    <div class='navbar bg-primary'>
        <ul>
            <li>
                <router-link to="/">Activities</router-link>
            </li>
            <li>
                <router-link to="/mylist">Mylist</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
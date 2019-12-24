<template>
    <div id="app">
        <div class="container">
            <Navbar/>
            <router-view/>
        </div>
    </div>
</template>

<script>
    import Navbar from "./components/layout/Navbar";

    export default {
        name: 'app',
        components: {
            Navbar
        }
    }
</script>

<style>
    @import "assets/App.css";
</style>

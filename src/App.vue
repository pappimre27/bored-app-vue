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
    @import url('https://fonts.googleapis.com/css?family=Roboto');

    /* Global Styles */
    :root {
        --primary-color: rgb(46, 76, 173);
        --dark-color: #333333;
        --light-color: #f4f4f4;
        --danger-color: #dc3545;
        --success-color: #28a745;
        --border-style: 1px solid rgb(209, 206, 206);
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        line-height: 1.6;
        background-color: #fff;
        color: #333;
    }

    .container {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        max-width: 780px;
        height: 500px;
        border-left: var(--border-style);
        border-right: var(--border-style);
        border-bottom: var(--border-style);
        overflow: auto;
    }

    a,
    i {
        color: var(--primary-color);
        text-decoration: none;
        cursor: pointer;
    }

    a,
    i:hover {
        color: #666;
    }

    ul {
        list-style: none;
    }

    img {
        width: 100%;
    }
</style>

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
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.7rem 2rem;
        z-index: 1;
        width: 100%;
        border-bottom: solid 1px var(--primary-color);
        opacity: 0.9;
        margin-bottom: 1rem;
    }

    .navbar ul {
        display: flex;
    }

    .navbar a {
        color: #fff;
        padding: 0.45rem;
        margin: 0 0.25rem;
    }

    .navbar a:hover {
        color: var(--light-color);
    }

    .navbar .welcome span {
        margin-right: 0.6rem;
    }


    @media (max-width: 700px) {
        .navbar {
            display: block;
            text-align: center;
        }

        .navbar h1 {
            margin-bottom: 0.6rem;
        }

        .navbar ul {
            text-align: center;
            justify-content: center;
        }
    }
</style>
<template>
    <div id="app">
        <h1>uwubin</h1>
        <h4>
            Welcome to uwubin, the links below will lead to all the very cute
            things you can do with uwubin.
        </h4>
        <div class="link-box">
            <router-link to="/paste">Paste</router-link> <br />
            <router-link to="/get">Get Paste</router-link><br />
            <router-link to="/edit">Edit Paste</router-link><br />
            <router-link to="/delete">Delete Paste</router-link><br />
            <router-link to="/find">Find Paste</router-link><br />
            <router-link to="/api">API</router-link><br />
        </div>
    </div>
</template>
<script>
import '../css/bootstrap.min.css';

export default {};
</script>

<style>
#app {
    margin: 4vmin;
    text-align: center;
}

.link-box {
    margin: 5vmin;
}

#api {
    margin: 5vmin;
    border: 2px solid;
    padding-top: 10px;
}
</style>

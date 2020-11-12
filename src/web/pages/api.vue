<template>
    <div id="app">
        <h1>API</h1>
        <p>
            Well, just know if in the output there's
            <code>success: true</code> then it worked lmao.
        </p>
        <div class="api-box">
            <div id="api">
                <p>Endpoint: <code>/api/v1/create</code></p>
                <p>Method(s): <code>POST</code></p>
                <p>Body(s): <code>paste :: paste content</code></p>
            </div>
            <div id="api">
                <p>Endpoint: <code>/api/v1/get/:id</code></p>
                <p>Method(s): <code>GET</code></p>
                <p>Param(s): <code>id :: paste id</code></p>
            </div>
            <div id="api">
                <p>Endpoint: <code>/api/v1/edit/:id</code></p>
                <p>Method(s): <code>PUT</code></p>
                <p>Param(s): <code>id :: paste id</code></p>
                <p>Header(s): <code>Authorization :: owner key</code></p>
            </div>
            <div id="api">
                <p>Endpoint: <code>/api/v1/delete/:id</code></p>
                <p>Method(s): <code>DELETE</code></p>
                <p>Param(s): <code>id :: paste id</code></p>
                <p>Header(s): <code>Authorization :: owner key</code></p>
            </div>
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

#api {
    margin: 5vmin;
    border: 2px solid;
    padding-top: 10px;
}
</style>

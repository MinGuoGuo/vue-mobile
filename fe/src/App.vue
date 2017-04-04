<template>
    <div id="app">
        <router-view></router-view>
        <div class="nav-bar">
            <nav-bar></nav-bar>
        </div>
    </div>
</template>

<script>
import NavBar from '../src/components/nav/nav';
export default {
    name: 'app',
    components: {
      NavBar
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.nav-bar {
        left: 0;
        bottom: 0;
        width: 100%;
        position: fixed;
    }
</style>

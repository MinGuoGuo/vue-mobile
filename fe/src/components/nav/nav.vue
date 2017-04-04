<template>
    <ul class="nav">
        <li>
            <router-link to="/">我要买</router-link>
        </li>
        <li>
            <router-link to="/Sale">我要卖</router-link>
        </li>
        <li>
            <router-link to="/Mine">我的</router-link>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'nav'
}
</script>
<style>
.nav {
    margin: 0;
    padding: 0;
    height: 64px;
    width: 100%;
    list-style: none;
    font-size: 30px;
    display: flex;
    display: -webkit-flex;
    line-height: 64px;
    border-top: 1px #999 solid;
}
.nav li {
    width: 33.3%;
    height: 100%;
    border-right: 1px #999 solid;
}
.nav li:nth-child(3) {
    border-right: none
}
a {
    width: 100%;
    height: 100%;
    display: inline-block;
    text-decoration: none;
    color: #000;
}
.buy .router-link-active,
.router-link-active {
    color: yellowgreen
}
</style>
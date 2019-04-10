<template>
    <div id="app">
        <Sidebar />
        <router-view/>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
    components: { Sidebar }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: #333333;
    box-sizing: inherit;
}

#app {
    display: flex;
    min-height: 100vh;
}
</style>

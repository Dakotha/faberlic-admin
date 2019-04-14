<template>
    <div id="app">
        <app-header v-if="this.$store.state.user"></app-header>
        <app-sidebar v-if="this.$store.state.user"></app-sidebar>
        <router-view />
    </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default {
    components: { appSidebar: Sidebar, appHeader: Header }
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
    color: #16222A;
    box-sizing: inherit;
}

#app {
    display: flex;
    min-height: 100vh;
    background-color: #EDF0F2;
}

// Globals
main {
    margin-top: 7rem;
    margin-left: 25rem;
    padding: 2rem; 
}

h2.section-title {  
    margin: 2rem 0;
    font-size: 2rem;
    font-weight: 700;
}

.panel {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    background-color: #fff;
    box-shadow: 0 1px 8px rgba(0, 0, 0, .05);

    &__title,
    &__body,
    &__footer {
        padding: 2rem;
        border-bottom: 1px solid #DCDFE1;
    }

    &__title {
        font-weight: 700;
    }

    // &__body {
        
    // }

    // &__footer {
        
    // }
}
</style>

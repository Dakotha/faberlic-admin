<template>
    <div class="sidebar">
        <nav class="navigation">
            <router-link to="/">Kokpit</router-link>
            <router-link to="/zamowienia">Zamówienia</router-link>
            <router-link to="/newsletter">Newsletter</router-link>
        </nav>
    </div>
</template>

<style lang="scss">
.sidebar {
    display: flex;
    flex-direction: column;
    width: 25rem;
    background-color: #131B23;
}

.navigation {
    display: flex;
    flex-direction: column;

    a {
        background-color: #242C34;
        margin: .1rem 0;
        padding: 2rem;

        color: #ffffff;
        text-decoration: none;
        text-transform: uppercase;
    }
}
</style>

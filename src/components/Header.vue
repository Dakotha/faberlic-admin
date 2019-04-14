<template>
    <div class="header">
        <div class="header__name">{{ this.$store.state.user.name }}</div>
        <div @click="logout" class="header__logout">Wyloguj</div>
    </div>
</template>

<script>
export default {
    methods: {
        logout () {
            this.$store.commit('logout')
            this.$router.replace('/login')
        }
    }
}
</script>

<style lang="scss">
.header {
    position: fixed;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 7rem;
    background-color: #ffffff;
    box-shadow: 0 1px 8px rgba(0, 0, 0, .05);
    z-index: 99;

    &__name {
        margin: 0 2rem;
    }

    &__logout {
        margin: 0 2rem;
        padding: 1rem;
        cursor: pointer;
        border: 1px solid #D1D1D1;
        border-radius: .5rem;

        &:hover {
            background-color: #F7F7F7;
        }
    }
}
</style>

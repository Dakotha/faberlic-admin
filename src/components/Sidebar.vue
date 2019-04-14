<template>
    <div class="sidebar">
        <div class="sidebar__logo">
            <div>Faberlic</div>
            Zenobia Bednarowicz
        </div>

        <nav class="sidebar__navigation">
            <router-link to="/"><i class="fas fa-tachometer-alt"></i>Kokpit</router-link>
            <router-link to="/zamowienia"><i class="fas fa-folder-open"></i>Zamówienia</router-link>
            <router-link to="/newsletter"><i class="far fa-file-alt"></i>Newsletter</router-link>
        </nav>
    </div>
</template>

<style lang="scss">
.sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 25rem;
    height: 100%;
    background-color: #284B63;
    z-index: 100;

    &__logo {
        padding: 4rem 0;
        text-align: center;
        font-size: 1.6rem;
        color: #fff;

        div {
            font-size: 1.8rem;
            font-weight: 700;
        }
    }

    &__navigation {
        display: flex;
        flex-direction: column;

        a {
            margin: .1rem 0;
            padding: 2rem; 
            color: #ffffff;
            text-decoration: none;
            opacity: .5;

            &.router-link-exact-active {
                background-color: #25455A;
                border-left: 3px solid #627C8D;
                opacity: 1;

                &:hover {
                    background-color: #25455A;
                }
            }

            i {
                display: inline-block;
                margin-right: 1rem;
                width: 3.5rem;
                font-size: 1.8rem;
                text-align: center;       
            }

            &:hover {
                background-color: #3B5B71;
            }
        } 
    }
}
</style>

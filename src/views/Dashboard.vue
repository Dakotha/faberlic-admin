<template>
    <main class="dashboard">
        <h2 class="section-title">Kokpit</h2>
        
        <div class="content">
            <div class="panel">
                <div class="panel__title">Zamówienia</div>
                <div class="panel__body">
                    <!-- {{ this.$store.state.user }} -->
                    <!-- <ul> -->
                        <p>Łącznie zamówień: {{ this.orders.length }}</p>
                        <p>Zamówienia oczekujące na dostawę towaru: {{ this.orders.length }}</p>
                        <p>Zamówienia zrealizowane w tym tygodniu: {{ this.orders.length }}</p>
                    <!-- </ul> -->
                </div>
                <!-- <div class="panel__footer"></div> -->
            </div>

            <div class="panel">
                <div class="panel__title">Newsletter</div>
                <div class="panel__body">
                    <!-- {{ this.$store.state.user }} -->
                    <!-- <ul> -->
                        <p>Łącznie zamówień: {{ this.orders.length }}</p>
                        <p>Zamówienia oczekujące na dostawę towaru: {{ this.orders.length }}</p>
                        <p>Zamówienia zrealizowane w tym tygodniu: {{ this.orders.length }}</p>
                    <!-- </ul> -->
                </div>
                <!-- <div class="panel__footer"></div> -->
            </div>
        </div>

    </main>
</template>

<script>
import axios from '../axios'

export default {
    data () {
        return {
            orders: []       
        }
    },

    created() {
        axios.get('/orders', { headers: { Authorization: this.$store.state.user.token }})
            .then(result => {
                this.orders = result.data
            }).catch(err => {
                console.log(err)
            })
    }
}
</script>

<style lang="scss">
.dashboard {
    display: flex;
    flex-direction: column;
    padding: 2rem;

    .content {
        display: flex;
    }
}
</style>


<template>
    <main class="order">
        <!-- <div class="table">
            <div v-for="order in orders" :key="order._id" class="table__row">
                <div class="table__field">{{ order.name }}</div>
                <div class="table__field">{{ order.email }}</div>
                <div class="table__field">{{ order.phone }}</div>
                <div class="table__field">{{ order.address }}</div>
                
            </div>
        </div> -->

        <table>
            <tr>
                <th>Imię</th><th>Email</th><th>Telefon</th><th>Adres</th>
            </tr>
            
            <tr v-for="order in orders" :key="order._id">
                <td>{{ order.name }}</td>
                <td>{{ order.email }}</td>
                <td>{{ order.phone }}</td>
                <td>{{ order.address }}</td>
            </tr>
        </table>
    </main>
</template>

<script>
import axios from 'axios'

export default {
    data: function () {
        return {
            orders: []
        }
    },
    created() {
        axios.get('http://api.faberlic.ostroleka.pl/order').then((result) => {
            
            // this.orders = JSON.parse(result.data)
            this.orders = result.data

            console.log(this.orders)
        }).catch((err) => {
            console.log(err)
        })
    }
}
</script>

<style lang="scss">
td {
    padding: 1rem;
    border: 1px solid #666;
}
.table {
    display: flex;
    flex-direction: column;

    &__row {
        display: flex;
    }

    &__field {
        padding: 1rem;
        border: 1px solid #eee;
    }
}
</style>
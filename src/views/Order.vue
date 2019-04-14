<template>
    <main class="order">
        <h2 class="section-title">Zamówienia</h2>

        <div class="panel">
            <table class="table">
                <thead>
                    <tr>
                        <th>Nr zamówienia</th>
                        <th>Imię i nazwisko</th>
                        <th>Adres email</th>
                        <th>Telefon</th>
                        <th>Adres</th>
                        <th>Produkt</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in orders" :key="order._id" @click="details(order._id)">
                        <td>{{ order.orderNumber }}</td>
                        <td>{{ order.name }}</td>
                        <td>{{ order.email }}</td>
                        <td>{{ order.phone }}</td>
                        <td>{{ order.address }}</td>
                        <td>
                            <li v-for="(product, index) in order.products" :key="index">
                                {{ product.productName }} |
                                {{ product.productId }} |
                                {{ product.productQuantity }}
                            </li>
                        </td>
                        <td>
                            <select name="" id="">
                                <option value="1">Czeka na dostawę</option>
                                <option value="2">Przygotowane do wysyłki</option>
                                <option value="3">Wysłane</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-if="modal" class="modal-bg">
            <div class="modal panel">
                <div class="panel__title">{{ orderDetails.name }}</div>

                <div class="panel__body">
                    <div>Adres email: {{ orderDetails.email }}</div>
                    <div>Nr telefonu: {{ orderDetails.phone }}</div>
                    <div>Adres: {{ orderDetails.address }}</div>
                    <hr>
                    <div>Produkty</div>
                    <ul v-for="product in orderDetails.products" :key="product.productId">
                        <li>{{ product.productName }}</li>
                        <li>{{ product.productId }}</li>
                        <li>{{ product.productQuantity }}</li>
                    </ul>
                </div>
                
                <div class="panel__footer">
                    <button @click="modal = false">Zamknij</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from '../axios'

export default {
    data: function () {
        return {
            orders: [],
            orderDetails: {},
            modal: false
        }
    },

    created() {
        axios.get('/orders', { headers: { Authorization: this.$store.state.user.token }})
            .then((result) => {
                this.orders = result.data
            }).catch((err) => {
                console.log(err)
            })
    },

    methods: {
        details (orderId) {
            this.orders.filter(order => {
                if (order._id === orderId) this.orderDetails = order
            })
            this.modal = true
        }
    }
}
</script>

<style lang="scss">
.table {
    width: 100%;
    border-collapse: collapse;

    thead th {
        padding: 2rem;
        border-bottom: 2px solid #B9C0C4;
    }

    td {
        padding: 2rem;
        border-bottom: 1px solid #DCDFE1;
    }

    tbody tr:hover {
        background-color: #EDEFF0;
        cursor: pointer;
    }
}

.modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: .9);
    overflow: hidden;
    z-index: 1000;
}

.modal {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    margin: 0;
    z-index: 1001;

    button {
        float: right;
        padding: 1rem 2rem;
        cursor: pointer;
        border: 1px solid #D1D1D1;
        background-color: inherit;
        border-radius: .5rem;

        &:hover {
            background-color: #F7F7F7;
        }
    }

    ul {
        margin-left: 2rem;
    }
}
</style>
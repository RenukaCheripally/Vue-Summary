import Vue from 'vue';
import {mapGetters} from 'vuex';

const template = `
    <div>
        <h1>{{ message }}</h1>
        <div>
            <button v-on:click="dec()">-</button>
            <b>{{ getCount }}</b>
            <button v-on:click="inc()">+</button>
        </div>
    </div>
`;

function data() {
    return {
        message: 'Sub Header',
    }
}

let props = {
    counter: {
        type: Number,
        default: 999
    }
}

Vue.component('custom-component', {
    computed:{
        ...mapGetters(['getCount'])
    },
    template,
    data,
    props,
    methods: {
        inc() {
            this.$store.dispatch('inc')
        },
        dec() {
            this.$store.dispatch('dec')
        }
    }
})


import Vue from 'vue';
import {mapGetters} from 'vuex';

const template = `
    <div>
        <h1>{{ message }}</h1>
        <div>
            <slot name="header"></slot>
            <button v-on:click="dec()">-</button>
            <b>{{ getCounter }}</b>
            <button v-on:click="inc()">+</button>
            <slot name="footer" message1="Scoped slot data"></slot>
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
        ...mapGetters(['getCount', 'getCounter'])
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


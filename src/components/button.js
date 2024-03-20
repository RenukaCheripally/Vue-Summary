import Vue from 'vue';
import '../assets/button.css'

const template= `
<div>
    <button class="button" v-on:click="click">{{ buttonName }}</button>
</div>
`;

Vue.component('v-button', {
    template,
    props: {
        buttonName: {
            type: String,
            default: 'Guess'
        },
        clickButton: Function,
    },
    methods: {
        click() {
            this.clickButton(this.buttonName);
        }
    }
})
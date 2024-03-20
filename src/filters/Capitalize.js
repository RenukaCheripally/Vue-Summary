import Vue from 'vue';

Vue.filter('capitalize', function(value) {
    return value.toUpperCase();
})
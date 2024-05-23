<template>
    <div class="posts-container">
        <ul class="posts" v-for="post in $store.getters.getPosts">
            <li class="post">{{ post }}</li>
        </ul>
    </div>

</template>

<script>
import {mapGetters} from 'vuex';

export default {
    data() {
        return {
            posts: {}
        }
    },
    computed: {
        ...mapGetters(['getPosts'])
    },
    created() {
        this.getPostsu();
    },
    methods: {
        getPostsu() {
            this.$store.dispatch('getPostsOnline');
        }
    }
}

</script>

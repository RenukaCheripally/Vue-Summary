import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const newStore = new Vuex.Store({
    state: {
        posts: {}
    },
    actions: {
        getPostsOnline: (context) => {
            const api = 'https://jsonplaceholder.typicode.com/posts';
            const options = {
                method: 'GET',
            }

            fetch(api, options)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Error: ' + response.statusText);
            })
            .then(data => {
                context.commit('updatePosts', data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        }
    },
    mutations: {
        updatePosts: (state, posts) => {
            state.posts = posts;
        }
    },
    getters: {
        getPosts: (state) => {
            return state.posts;
        }
    }
});

export default newStore;

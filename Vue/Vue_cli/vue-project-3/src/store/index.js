import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        content_categories: []
    },
    mutations: {
        SET_Content(state, content) {
            state.content_categories = content;
        }
    }
});

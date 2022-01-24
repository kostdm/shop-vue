import productsApi from '../../api/products';

const state = () => ({
  all: [],
  isLoading: true,
});

const getters = {

  allProducts(state) {
    return state.all;
  },

  loadingStatus(state) {
    return state.isLoading;
  },

};

const actions = {

  loadProducts({ commit }) {
    commit('setLoading', true);
    productsApi.getAll().then(products => {
      commit('setProducts', products);
      commit('setLoading', false);
    });
  },

};

const mutations = {

  setProducts(state, products) {
    state.all = products;
  },

  setLoading(state, status) {
    state.isLoading = status;
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
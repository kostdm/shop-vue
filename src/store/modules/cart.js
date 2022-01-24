const state = () => ({
  items: [],
  itemsInfo: [],
  needUpdate: false,
});

const getters = {

  cartItems: (state) => {
    return state.items;
  },
  cartItemsInfo: (state) => {
    return state.itemsInfo;
  },
  alreadyInCart: (state) => (id) => {
    return state.items.some(item => item.id === id);
  },
  updateStatus: (state) => {
    return state.needUpdate;
  },
  totalSumm: (state) => {
    return state.itemsInfo.reduce( (total, item) => total + item.price * item.count, 0);
  },
  totalCount: (state) => {
    return state.items.reduce( (total, item) => total + item.count, 0);
  },

};

const actions = {

  addToCart({ commit }, id) {
    commit('addItem', id);
    commit('setUpdate', true);
  },

  addItemsInfo({ commit }, items) {
    commit('fillItemsInfo', items);
  },

  removeFromCart({ commit }, id) {
    commit('removeItem', id);
    commit('setUpdate', true);
  },

  updateSuccess({ commit }) {
    commit('setUpdate', false);
  },

};

const mutations = {

  addItem(state, id) {
    state.items.push({
      id,
      count: 1
    });
  },

  fillItemsInfo(state, items) {
    state.itemsInfo = items;
  },

  removeItem(state, id) {
    state.items = state.items.filter(item => item.id !== id);
  },

  setUpdate(state, status) {
    state.needUpdate = status;
  }

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
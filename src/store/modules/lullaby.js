/* eslint-disable no-unused-vars */
const lullabyLines = ['On the way to reach my dreams', 'How I wonder what stardom holds'];

// initial state
const state = () => ({
  lullabyLines: [
    'On the way to reach my dreams', 'How I wonder what stardom holds'
  ],
})

// // getters
// const getters = {
//   cartProducts: (state, getters, rootState) => {
//     return state.items.map(({ id, quantity }) => {
//       const product = rootState.products.all.find(product => product.id === id)
//       return {
//         title: product.title,
//         price: product.price,
//         quantity
//       }
//     })
//   },

//   cartTotalPrice: (state, getters) => {
//     return getters.cartProducts.reduce((total, product) => {
//       return total + product.price * product.quantity
//     }, 0)
//   }
// }

// actions
const actions = {
  addLullabyLine ({ commit, state }, lullabyLine) {
    commit('addLullabyLines', [lullabyLine])
  },
}

// mutations
const mutations = {
  addLullabyLines (state, [lines]) {
    console.log(lines)
    let lineList = [lines];
    lineList.forEach( (line) => {
      state.lullabyLines.push(line)
    });
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
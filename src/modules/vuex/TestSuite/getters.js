const getters = {
  pageIsCollapsed: (state) => (id) => {
    return state.pages[id].collapsed;
  },
  featureIsCollapsed: (state) => (pageId, featureId) => {
    return state.pages[pageId].features[featureId].collapsed;
  }
}

export { getters }
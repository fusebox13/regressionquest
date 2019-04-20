const mutations = {
  ADD_GROUP(state, description) {
    state.pages.push({
      description: description,
      features: []
    });
  },
  ADD_FEATURE(state, index) {
    state.pages[index].features.push({
      description: "New Feature",
      defects: [],
      editable: true
    });
  },
  UPDATE_FEATURE_DESCRIPTION(state, args) {
    state.pages[args.pageId].features[args.featureId].description =
      args.description;
  }
};

export { mutations };

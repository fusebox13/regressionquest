const mutations = {
  SET_ROLE(state, role) {
    state.role = role;
  },
  SET_ENVIRONMENT(state, environment) {
    state.environment = environment;
  },
  ADD_GROUP(state, description) {
    state.pages.push({
      description: description,
      features: []
    });
  },
  TOGGLE_COLLAPSE_GROUP(state, index) {
    state.pages[index].collapsed = !state.pages[index].collapsed
  },
  TOGGLE_COLLAPSE_FEATURE(state, {pageId, featureId}) {
    state.pages[pageId].features[featureId].collapsed = 
      !state.pages[pageId].features[featureId].collapsed
  },
  ADD_FEATURE(state, index) {
    state.pages[index].features.push({
      description: "",
      defects: [],
      editable: true
    });
  },
  DELETE_FEATURE(state, args) {
    state.pages[args.pageId]
      .features
      .splice(args.featureId, 1);
  },

  TOGGLE_FEATURE_EDIT_MODE(state, args) {
    state.pages[args.pageId]
      .features[args.featureId]
      .editable = !args.editable;
  },

  UPDATE_FEATURE_DESCRIPTION(state, args) {
    state
      .pages[args.pageId]
      .features[args.featureId]
      .description = args.description;
  },
  ADD_DEFECT(state, args) {
    state.pages[args.pageId]
      .features[args.featureId]
      .defects.push({
        description: "",
        editable: true,
        currentBehavior: "",
        expectedBehavior: "",
        stepsToReproduce: "",
        severity: 0,
        createdAt: 0,
        updatedAt: 0,
        deleted: false,
        deletedAt: 0
      });
  },
  COMMIT_DEFECT(state, args) {
    state
      .pages[args.pageId]
      .features[args.featureId]
      .defects[args.defectId]
      .createdAt = Date.now();
  },
  DELETE_DEFECT(state, args) {
    state.pages[args.pageId]
      .features[args.featureId]
      .defects
      .splice(args.defectId, 1);
  },
  SOFT_DELETE_DEFECT(state, args) {
    state
      .pages[args.pageId]
      .features[args.featureId]
      .defects[args.defectId]
      .deleted = true;
    
    state
      .pages[args.pageId]
      .features[args.featureId]
      .defects[args.defectId]
      .deletedAt = Date.now();
  },
  UPDATE_DEFECT_DESCRIPTION(state, args) {
    state
      .pages[args.pageId]
      .features[args.featureId]
      .defects[args.defectId]
      .description = args.description;
  },

  UPDATE_DEFECT_PROPERTY(state, args) {
    state
      .pages[args.pageId]
      .features[args.featureId]
      .defects[args.defectId][args.key] = args.value;
    
    state
      .pages[args.pageId]
      .features[args.featureId]
      .defects[args.defectId]
      .updatedAt = Date.now();
  },
  
  TOGGLE_DEFECT_EDIT_MODE(state, args) {
    state.pages[args.pageId]
      .features[args.featureId]
      .defects[args.defectId]
      .editable = !args.editable;
  },
};

export { mutations };

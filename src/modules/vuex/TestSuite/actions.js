const actions = {
  addGroup({commit}, groupName) {
    if(!groupName || !groupName.trim()) { return }
    commit("ADD_GROUP", groupName);
  }
}

export { actions }
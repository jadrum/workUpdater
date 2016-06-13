function render() {
  whatImDoin.innerHTML = store.getState().toString();
}
render()
store.subscribe(render)

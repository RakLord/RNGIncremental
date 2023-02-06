function switchTab(tabName) {
    console.log("Tab", tabName.data.tabName.eventParams);
    tab = tabName.data.tabName.eventParams;
    updateDOM();
}
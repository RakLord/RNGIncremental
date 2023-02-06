function switchTab({ data : {tabName}}) {
    console.log("Tab", tabName);
    tab = tabName;
    updateDOM();
}
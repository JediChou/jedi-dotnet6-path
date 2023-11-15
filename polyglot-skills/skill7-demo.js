var flag =false;
document.getElementById("js-file-test").onclick = function() {
    if(flag) {
        event.currentTarget.style.backgroundColor = "goldenrod";
    }
    else {
        event.currentTarget.style.backgroundColor = "green";
    }
    flag = !flag;
};

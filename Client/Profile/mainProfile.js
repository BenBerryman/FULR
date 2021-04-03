
function edit(section) {
    var editField = section.querySelector(".text-input");

    editField.contentEditable = "true";
    var check = '<button onclick="finalize(this.parentElement)"><i class="fas fa-check"></i></button>';
    var button = section.querySelector("button");
    button.outerHTML = check;

}
function getUserID() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies)
    {
        if (cookie.indexOf('userID') > -1)
        {
            return cookie.split('=')[1];
        }
    }
}


function finalize(section) {
    var editField = section.querySelector(".text-input");
    var className = editField.className;

    var field;
    if (className.indexOf('street') > -1)
        field = 'street';
    else if (className.indexOf('city') > -1)
        field = 'city';
    else if (className.indexOf('state') > -1)
        field = 'state';
    else if (className.indexOf('zip') > -1)
        field = 'zip';
    else
        field = 'null';
    var data = editField.innerHTML;
    fetch('http://localhost:5000/mainProfile',
        {method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                userID: getUserID(),
                field: field,
                data: data
            })});
    editField.contentEditable = "false";
    var check = section.querySelector("button");
    var button = '<button onClick="edit(this.parentElement)">Edit</button>';

    check.outerHTML = button;
}
$("#quoteHistory").hide();

$("#profileInfoShow").click(function() {
    $(this)[0].classList.remove("inactive");
    $("#quoteHistoryShow")[0].classList.add("inactive");
    $("#profileInfo").show();
    $("#quoteHistory").hide();

});
$("#quoteHistoryShow").click(function() {
    $(this)[0].classList.remove("inactive");
    $("#profileInfoShow")[0].classList.add("inactive");
    $("#profileInfo").hide();
    $("#quoteHistory").show();
});




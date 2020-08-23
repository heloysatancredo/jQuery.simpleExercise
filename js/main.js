$(document).ready(function () {
    $("#button1").click(function () {
        let num = $("#number").val();
        let string = $("#string").val();

        if (num > 0 && string !== "") {
            for (let i = 0; i < num; i++) {
                $("#main").append(`<p>${string}</p>`);
            }
        } else {
            alert("Please provide some value for each field.");
        }
    });
});
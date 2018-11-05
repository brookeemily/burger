$(function () {
    // when the devour button is clicked.....
    $(".devour-burger").on("click", function(event) {
        console.log("clicked");
        // get the ID of the burger eaten
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        // update the state of the burger
        var newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("changed devour to..." + newDevour);
                //reload the page
                location.reload();
            }
        );
        });

})
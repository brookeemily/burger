$(function() {
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
    }).then(function() {
      console.log("changed devour to..." + newDevour);
      //reload the page
      location.reload();
    });
  });

  // when submit button is clicked....
  $(".addBurger").on("submit", function(event) {
    // var newBurgerName = $("#burgerName").val().trim();
    event.preventDefault();

    // add new burger from input

    var newBurger = {
      name: $("#addNewBurgerName").val().trim(),
    };

// console.log(newBurger);
// console.log($("#addNewBurgerName").val().trim());
    // Send POST request to add the data to the server
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then
    (function() {
      console.log("order up!");
      // reload the page so the list updates
      location.reload();
    }
);
  });
});

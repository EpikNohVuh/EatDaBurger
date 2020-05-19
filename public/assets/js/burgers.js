// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  $(".burgerform").on("submit", function(event) {
    event.preventDefault();
    console.log("working", $(this).children(".burger_id").val())
    var id = $(this).children(".burger_id").val();
    

    // Send the PUT request.
    $.ajax({
      method: "PUT",
      url: "/api/burgers/" + id
    }).then(
      function() {
       console.log('bjjckdsbcs')
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    console.log('log', $(this).children('#burger_name').val())

    var newburger = {
      name:  $(this).children('#burger_name').val().trim(),
      devour: false
    };
// console.log('newbut', newburger)

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data:newburger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

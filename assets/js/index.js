//Display msg when successfully added new position
$("#add_user").submit(function (event) {
  alert("Data Inserted Successfully");
});

//on user-update
$("#update_user").submit(function (event) {
  //do not reload page
  event.preventDefault();

  //gets objects with user data
  var unindexed_array = $(this).serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  console.log(data);

  //api request
  var request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  //update data
  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully");
  });
});

//delete user data position
if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete ");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    //confirm question
    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function (response) {
        alert("Data removed Successfully");
        location.reload();
      });
    }
  });
}

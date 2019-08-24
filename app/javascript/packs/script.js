console.log("Loading script");

window.onload = () => {

//To fix small margins on top and bottom of page
    var abc = document.body.innerHTML;
    var a = String(abc).replace(/\u200B/g,'');
    document.body.innerHTML = a;

//For search bar on job index page
  $('#myInput').on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

//For search bar on document index page
  $('#myDocu').on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#docu-cards div").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

//To show modal on index page
  $("#jobsTable #myTable tr").on("click", function(e){
    let jobID = this.dataset.job;
    $("#modal-id-"+jobID).modal('show');
  })

//To add job through  modal universally
  $("#addButton").on("click", function(e){
    $("#add-new-modal").modal('show');
  })

//To add contact through modal universally
  $("#addContacts").on("click", function(e){
    $("#add-new-contacts-modal").modal('show');
  })

//To add contact through modal universally
  $("#addDocu").on("click", function(e){
    $("#add-new-document-modal").modal('show');
  })

  $(function () {
  $('[data-toggle="popover"]').popover({     html : true,
    content: function() {
       return $('#popover-content').html();
        }})
})




};


// function myFunction() {
//   var element = document.getElementsByClassName('change-file')
//   element.classList.remove("to-hide");
// }
$(function () {
  $("#datatable-Strategy").DataTable({
    retrieve: true,
    pageLength: 5,
    paging: true,
    lengthChange: false,
    searching: false,
    ordering: true,
    info: false,
    autoWidth: false,
    responsive: true,
  });
});

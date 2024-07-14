$(function () {
  $("table.datatable").DataTable({
    retrieve: true,
    pageLength: 5,
    paging: true,
    lengthChange: false,
    searching: true,
    filter: true,
    ordering: true,
    info: true,
    autoWidth: false,
    responsive: true,
  });
});

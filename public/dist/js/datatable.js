$(function () {
  $("#datatable-Strategy").DataTable({
    retrieve: true,
    pageLength: 10,
    paging: true,
    lengthChange: false,
    searching: true,
    filter: true,
    ordering: true,
    info: false,
    autoWidth: false,
    responsive: true,
  });
});

$(function () {
  $("#datatable-Subscribedstrategy").DataTable({
    retrieve: true,
    pageLength: false,
    paging: true,
    lengthChange: false,
    searching: false,
    ordering: false,
    info: false,
    autoWidth: false,
    responsive: true,
  });
});

$(function () {
  $("#datatable-Investors").DataTable({
    retrieve: true,
    pageLength: false,
    paging: true,
    lengthChange: false,
    searching: false,
    ordering: false,
    info: false,
    autoWidth: false,
    responsive: true,
  });
});

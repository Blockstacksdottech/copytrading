$(function () {
  $("#datatable-dashboard").DataTable({
    retrieve: true,
    paging: true,
    lengthChange: false,
    searching: false,
    ordering: false,
    info: false,
    autoWidth: false,
    responsive: true,
  });
  $("#datatable-leaderboard").DataTable({
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

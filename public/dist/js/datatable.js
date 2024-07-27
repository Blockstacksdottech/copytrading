$(function () {
  $("table.datatable").DataTable({
    order: [0, "desc"],
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
    language: {
      search: "",
      searchPlaceholder: "Search",
    },
  });
});

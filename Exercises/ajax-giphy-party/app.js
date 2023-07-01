const $gifArea = $("#gif-area");
const $searchInput = $("#gif-search");

function getGif(res) {
  let allResults = res.data.length;
  if (allResults) {
    let randomGif = Math.floor(Math.random() * allResults);
    let $newCol = $("<div>", { class: "col.md-4 vol-12 md-4" });

    let $newGif = $("<img>", {
      src: res.data[randomGif].images.original.url,
      class: "w-100",
    });

    $newCol.append($newGif);
    $gifArea.append($newCol);
  }
}

$("form").on("submit", async function (e) {
  e.preventDefault();
  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: { 
        q: searchTerm, 
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
  });
  getGif(res.data);
});

$("#gif-remove").on("click", function () {
  $gifArea.empty();
});

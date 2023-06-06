let currId = 0;
let movieList = [];

$(function () {
  $("#new-movie").on("submit", function (evt) {
    evt.preventDefault();
    let title = $('#title').val();
    let rating = $('#rating').val();

    let movieData = {title, rating, currId};
    const appendHtml = createMovieDataHTML(movieData);

    currId++
    movieList.push(movieData);

    $('#movie-table-body').append(appendHtml);
    $('new-movie').trigger('reset');
  });

  $('tbody').on('click', '.btn.btn-remove', function(evt){
    let removeIdx = movieList.findIndex(movie => movie.currId === +$(evt.target).data('deleteId'))

    movieList.splice(removeIdx, 1)

    $(evt.target).closest('tr').remove();
  });
});

function createMovieDataHTML(data) {
  return `
        <tr>
            <td>${data.title}</td>
            <td>${data.rating}</td>
            <td>
                <button class="btn btn-remove" delete-data-id=${data.currId}>
                    Remove
                </button>
            </td>
        </tr>
    `;
}

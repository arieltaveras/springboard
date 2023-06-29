"use strict";

const $showsList = $("#showsList");
const $episodesArea = $("#episodesArea");
const $searchForm = $("#searchForm");


/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function getShowsByTerm(term) {
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${term}`);
  console.log(res.data);
  // ADD: Remove placeholder & make request to TVMaze search shows API.

  return res.data.map(results => {
    const show = results.show
    console.log(show._links);
    return {
      id: show.id,
      name: show.name,
      summary: show.summary,
      image: show.image ? show.image.medium: MISSING_IMAGE_URL,
    }
  });
}


/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();

  for (let show of shows) {
    const $show = $(
      `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img
              src="${show.image}"
              alt="${show.name}"
              class="w-25 me-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>
       </div>
      `);

    $showsList.append($show);
  }
}


/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
  const term = $("#searchForm-term").val();
  const shows = await getShowsByTerm(term);

  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

// async function getEpisodesOfShow(id) {
//   const res = await axios.get(`https://api.tvmaze.com/episodes/${id}`);

  async function getEpisodesOfShow(id) {
    const res = await axios.get(`https://api.tvmaze.com/episodes/${id}?embed=show`);
    console.log(res.id);
    

  return res.data.map(e => ({
    id: e.id,
    name: e.name,
    season: e.season,
    number: e.number,
  }));
 }

/** Write a clear docstring for this function... */
// not sure on how to display the episodes. I am stuck here

function populateEpisodes(episodes) {
  const ul = document.querySelector('#episodesList');
  for(let show of episodes){
    const newLI = document.createElement('LI');
    newLI.innerHTML += `${show._link}`
    ul.append(newLI)
    console.log(show._link);
  }
 }

 const btn = document.querySelector('#episodesList');
 btn.addEventListener('click', getEpisodesOfShow)

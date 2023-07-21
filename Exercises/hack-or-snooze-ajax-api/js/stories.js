"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */
function getFavHTML(story, currentUser){}
function generateStoryMarkup(story) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();

  const showFav = Boolean(currentUser);

  return $(`
      <li id="${story.storyId}">
        <div>
        ${showFav ? getFavHTML(story, currentUser) : ""}
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small>
      </li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

// submit the story form
async function submitTheStory(evt) {
  console.debug("submitTheStory");
  evt.preventDefault();

  const title = $("#make-title").val();
  const url = $("#make-url").val();
  const author = $("#make-author").val();
  const username = currentUser.username;

  await storyList.addStory(currentUser, { title, url, author, username });

  const $story = generateStoryMarkup($story);
  $allStoriesList.prepend($story);

  $submitForm.slideUp("slow");
  $submitForm.trigger("reset");
}
const $submitForm = $("#submit-form")
$submitForm.on("submit", submitTheStory);
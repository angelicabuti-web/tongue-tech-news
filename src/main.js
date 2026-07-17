import './style.css'

import {
  getNewStoryIds,
  getStoryDetails,
} from './js/hackerNewsApi.js'

import {
  hideStatus,
  renderStories,
  setButtonLoading,
  showStatus,
  updateNewsCounter,
} from './js/newsView.js'

const STORIES_PER_PAGE = 10

const newsList = document.querySelector('#news-list')
const newsCounter = document.querySelector('#news-counter')
const statusMessage = document.querySelector('#status-message')
const loadMoreButton = document.querySelector('#load-more-button')

let storyIds = []
let currentIndex = 0
let displayedStories = 0

async function loadNextStories() {
  setButtonLoading(loadMoreButton, true)

  const loadingMessage =
    currentIndex === 0
      ? 'Caricamento delle notizie...'
      : 'Caricamento di altre notizie...'

  showStatus(statusMessage, loadingMessage)

  try {
    if (storyIds.length === 0) {
      storyIds = await getNewStoryIds()
    }

    const nextStoryIds = storyIds.slice(
      currentIndex,
      currentIndex + STORIES_PER_PAGE,
    )

    if (nextStoryIds.length === 0) {
      showStatus(statusMessage, 'Non ci sono altre notizie disponibili.')
      loadMoreButton.hidden = true
      return
    }

    const stories = await Promise.all(
      nextStoryIds.map((storyId) => getStoryDetails(storyId)),
    )

    const validStories = stories.filter(
      (story) =>
        story &&
        story.type === 'story' &&
        !story.deleted &&
        !story.dead,
    )

    renderStories(validStories, newsList)

    currentIndex += nextStoryIds.length
    displayedStories += validStories.length

    updateNewsCounter(newsCounter, displayedStories)
    hideStatus(statusMessage)

    if (currentIndex >= storyIds.length) {
      loadMoreButton.hidden = true
    }
  } catch (error) {
    console.error(error)

    showStatus(
      statusMessage,
      'Non è stato possibile caricare le notizie. Riprova tra poco.',
    )
  } finally {
    setButtonLoading(loadMoreButton, false)
  }
}

loadMoreButton.addEventListener('click', loadNextStories)

loadNextStories()
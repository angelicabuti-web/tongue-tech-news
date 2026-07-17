const API_BASE_URL = 'https://hacker-news.firebaseio.com/v0'

async function fetchJson(url) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Errore nella richiesta: ${response.status}`)
  }

  return response.json()
}

export async function getNewStoryIds() {
  const storyIds = await fetchJson(
    `${API_BASE_URL}/newstories.json`,
  )

  if (!Array.isArray(storyIds)) {
    throw new Error('La lista delle notizie non è valida')
  }

  return storyIds
}

export async function getStoryDetails(storyId) {
  return fetchJson(`${API_BASE_URL}/item/${storyId}.json`)
}
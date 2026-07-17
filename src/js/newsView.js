import {
  formatDate,
  getSourceName,
  getStoryUrl,
} from './newsUtils.js'

export function createNewsCard(story) {
  const article = document.createElement('article')
  article.className = 'news-card'

  const title = document.createElement('h3')
  title.className = 'news-card-title'

  const link = document.createElement('a')
  link.href = getStoryUrl(story)
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  link.textContent = story.title || 'Titolo non disponibile'

  title.append(link)

  const meta = document.createElement('div')
  meta.className = 'news-meta'

  const source = document.createElement('span')
  source.className = 'news-source'
  source.textContent = getSourceName(story.url)

  const date = document.createElement('time')
  date.textContent = formatDate(story.time)

  if (Number.isFinite(story.time)) {
    date.dateTime = new Date(story.time * 1000).toISOString()
  }

  meta.append(source, date)
  article.append(title, meta)

  return article
}

export function renderStories(stories, container) {
  const fragment = document.createDocumentFragment()

  stories.forEach((story) => {
    fragment.append(createNewsCard(story))
  })

  container.append(fragment)
}

export function updateNewsCounter(counterElement, total) {
  const label = total === 1 ? 'notizia' : 'notizie'
  counterElement.textContent = `${total} ${label}`
}

export function showStatus(statusElement, message) {
  statusElement.textContent = message
  statusElement.hidden = false
}

export function hideStatus(statusElement) {
  statusElement.hidden = true
}

export function setButtonLoading(button, isLoading) {
  button.disabled = isLoading
  button.textContent = isLoading
  ? 'Loading...'
  : 'Load more'
}
export function formatDate(unixTimestamp) {
  if (!Number.isFinite(unixTimestamp)) {
    return 'Data non disponibile'
  }

  const date = new Date(unixTimestamp * 1000)

  return new Intl.DateTimeFormat('it-IT', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(date)
}

export function getSourceName(url) {
  if (!url) {
    return 'Hacker News'
  }

  try {
    return new URL(url).hostname.replace('www.', '')
  } catch {
    return 'Hacker News'
  }
}

export function getStoryUrl(story) {
  if (story.url) {
    return story.url
  }

  return `https://news.ycombinator.com/item?id=${story.id}`
}
import { describe, expect, it } from 'vitest'

import {
  formatDate,
  getSourceName,
  getStoryUrl,
} from './newsUtils.js'

describe('formatDate', () => {
  it('restituisce un messaggio quando la data non è valida', () => {
    expect(formatDate(Number.NaN)).toBe('Data non disponibile')
  })

  it('restituisce una data leggibile per un timestamp valido', () => {
    const formattedDate = formatDate(1627388070)

    expect(formattedDate).not.toBe('Data non disponibile')
    expect(formattedDate).toContain('2021')
  })
})

describe('getSourceName', () => {
  it('estrae il dominio dal link della notizia', () => {
    expect(getSourceName('https://www.example.com/article')).toBe(
      'example.com',
    )
  })

  it('usa Hacker News quando il link non è disponibile', () => {
    expect(getSourceName()).toBe('Hacker News')
  })
})

describe('getStoryUrl', () => {
  it('restituisce il link originale quando è presente', () => {
    const story = {
      id: 123,
      url: 'https://example.com/article',
    }

    expect(getStoryUrl(story)).toBe('https://example.com/article')
  })

  it('crea un link Hacker News quando manca il link originale', () => {
    const story = {
      id: 123,
    }

    expect(getStoryUrl(story)).toBe(
      'https://news.ycombinator.com/item?id=123',
    )
  })
})
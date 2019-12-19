const ARTICLES = document.querySelectorAll('link[rel="preload"]')
const conteneur = document.querySelector('#articles-index')

const fetchHtml = (url) => {
  return fetch(url)
    .then(response => response.text())
    .then(html => ({
      url,
      node: new DOMParser().parseFromString(html, 'text/html').body.querySelector('section')
    }))
}

Promise.resolve(Array.from(ARTICLES))
  .then(articles => articles.map(link => link.getAttribute('href')))
  .then(articles => Promise.all(articles.map(fetchHtml)))
  .then(articles => articles.map(({url, node}) => {
    const linkNode = document.querySelector(`link[href="${url}"]`)
    linkNode.replaceWith(node)
  }))


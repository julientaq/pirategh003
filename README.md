# GH003 - Pirat\*

- 👀 [Texte/code source en ligne](https://glitch.com/~gh003-piratx) :
  `https://glitch.com/~gh003-piratx`
- 👀 [Voir le résultat en ligne](https://gh003-piratx.glitch.me) :
  `https://gh003-piratx.glitch.me`
- ⌨️ [Écrire en même temps](https://frama.link/gh003-edit) :
  `https://frama.link/gh003-edit`

## Intention

- créer un document multisupport, pour le web et pour le print
- illustrer le cheminement de pensée, de lecture et d'écriture dans le développement


## Ressources

- [MDN](https://developer.mozilla.org/fr/docs/Web/)
- [Documentation PagedMedia](https://www.pagedmedia.org/paged-js/)


## Page HTML offline

Saisir cette URL :

```html
data:text/html,<h1>Pirat<span>*</span></h1> <style>span { font-family: monospace; color: red; }</style>
```

Et le QR code qui va bien :

```html
<img src='https://chart.googleapis.com/chart?cht=qr&chl=data%3Atext%2Fhtml%2C%3Ch1%3EPirat%3Cspan%3E*%3C%2Fspan%3E%3C%2Fh1%3E%20%3Cstyle%3Espan%20%7B%20font-family%3A%20monospace%3B%20color%3A%20red%3B%20%7D%3C%2Fstyle%3E&chs=180x180&choe=UTF-8&chld=L|2' alt='qr code'>
```
const app = document.querySelector('#app')
app.innerHTML = ''

const viteLogo = './vite.svg'
const javascriptLogo = './javascript.svg'

const element = React.createElement(
  'div',
  null,
  React.createElement(
    'a',
    { href: 'https://vite.dev', target: '_blank' },
    React.createElement('img', { src: viteLogo, className: 'logo', alt: 'Vite logo' })
  ),
  React.createElement(
    'a',
    { href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', target: '_blank' },
    React.createElement('img', { src: javascriptLogo, className: 'logo vanilla', alt: 'JavaScript logo' })
  ),
  React.createElement('h1', null, 'Hello Vite!'),
  React.createElement(
    'div',
    { className: 'card' },
    React.createElement('button', { id: 'counter', type: 'button' })
  ),
  React.createElement(
    'p',
    { className: 'read-the-docs' },
    'Click on the Vite logo to learn more'
  )
)

ReactDOM.render(element, document.getElementById('app'))


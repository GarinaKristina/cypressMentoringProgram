// Menu
const menu = `<ul>
<li><a href="/">Home Page</a></li>
<li><a href="/items">Items Page</a></li>
</ul>`

// Head
const head = `<head>
<title>CRUD Application</title>
</head>`

// Title
const title = (title) => {
  return `<h1>${title}</h1>`
}

// Export template parts
module.exports = { menu, head, title }

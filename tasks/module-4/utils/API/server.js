const express = require('express')
const bodyParser = require('body-parser')
const { head, menu, title } = require('./template.parts.js')

const app = express()
const port = 3000

app.use(bodyParser.json())

// In-memory "database"
const storage = {}

// Home page
app.get('/', (req, res) => {
  res.send(`
    <html>
      ${head}
      <body>
        ${title('Welcome to CRUD Application')}
        ${menu}
      </body>
    </html>`)
})

// All items page
app.get('/items', (req, res) => {
  res.send(`
    <html>
      ${head}
      <body>
        ${title('Search an item')}
        ${menu}

        <input type="number" id="input"><button id="button">Search</button>
        <div id="output"></div>

        <script>
        const searchButton = document.getElementById('button')
        const itemInput = document.getElementById('input')
        const output = document.getElementById('output')
        
        searchButton.addEventListener('click', async () => {
          const itemId = itemInput.value
        
          if (!itemId) output.innerHTML = 'Please enter an valid item ID.'
        
          const response = await fetch('/items/' + itemId)
          const data = await response.json()
        
          output.innerHTML = JSON.stringify(data, null, 2)
        })
        </script>

      </body>
    </html>`)
})

// Create a new item
app.post('/items', (req, res) => {
  const { id, data } = req.body

  if (!id || !data || !data.title || !data.price) {
    return res.status(400).json({
      error:
        'To create an item: id, title, and price should be present in request',
    })
  }

  if (storage[id]) {
    return res
      .status(409)
      .json({ error: 'Item with the same id already exists' })
  }

  storage[id] = data
  res.status(201).json({ message: 'Item created successfully' })
})

// Read an item
app.get('/items/:id', (req, res) => {
  const id = req.params.id

  if (!storage[id]) {
    return res.status(404).json({ error: 'Item not found' })
  }

  res.status(200).json(storage[id])
})

// Update an item
app.put('/items/:id', (req, res) => {
  const id = req.params.id
  const data = req.body.data

  if (!storage[id]) {
    return res.status(404).json({ error: 'Item not found' })
  }

  if (!data || !data.title || !data.price) {
    return res.status(400).json({ error: 'Both title and price are required' })
  }

  if (typeof data.title !== 'string' || typeof data.price !== 'number') {
    return res.status(400).json({ error: 'Invalid data format' })
  }

  storage[id] = data
  res.status(200).json({ message: 'Item updated successfully' })
})

// Delete an item
app.delete('/items/:id', (req, res) => {
  const id = req.params.id

  if (!storage[id]) {
    return res.status(404).json({ error: 'Item not found' })
  }

  delete storage[id]
  res.status(200).json({ message: 'Item was successfully deleted' })
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

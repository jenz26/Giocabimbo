import { useState } from 'react'
import { TextField, Button, Stack, MenuItem } from '@mui/material'

function FormNewActivity() {
  const [formData, setFormData] = useState({
    title: '',
    age: '',
    time: '',
    materials: '',
    category: '',
    description: '',
    benefits: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.title || !formData.age || !formData.description) {
      alert('Compila i campi obbligatori: Titolo, Età, Descrizione.')
      return
    }

    // Costruisci la nuova attività
    const newActivity = {
      id: Date.now().toString(), // ID univoco
      title: formData.title,
      age: formData.age,
      time: formData.time,
      materials: formData.materials,
      category: formData.category,
      description: formData.description,
      benefits: formData.benefits.split(',').map(b => b.trim())
    }

    // Recupera eventuali attività salvate
    const stored = JSON.parse(localStorage.getItem('customActivities') || '[]')

    // Salva nuova attività
    const updated = [...stored, newActivity]
    localStorage.setItem('customActivities', JSON.stringify(updated))

    alert('Attività aggiunta con successo!')

    // Reset form
    setFormData({
      title: '',
      age: '',
      time: '',
      materials: '',
      category: '',
      description: '',
      benefits: ''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Titolo"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <TextField
          select
          label="Fascia d'età"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        >
          <MenuItem value="0-2">0-2 anni</MenuItem>
          <MenuItem value="2-5">2-5 anni</MenuItem>
          <MenuItem value="5-8">5-8 anni</MenuItem>
        </TextField>
        <TextField
          label="Tempo (es: 10 min)"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <TextField
          label="Materiali"
          name="materials"
          value={formData.materials}
          onChange={handleChange}
        />
        <TextField
          label="Categoria"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <TextField
          label="Descrizione"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={3}
          required
        />
        <TextField
          label="Benefici (separati da virgola)"
          name="benefits"
          value={formData.benefits}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Aggiungi Attività
        </Button>
      </Stack>
    </form>
  )
}

export default FormNewActivity

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from './components/filter';
import PersonForm from './components/personForm';
import Persons from './components/person';

const App = () => {
  // State for notes
  const [notes, setNotes] = useState([]);

  // State for persons
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newFilter, setNewFilter] = useState('');

  // Fetch notes data from server
  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled');
        setPersons(response.data);
        console.log(response.data);
      });
  }, []);
  console.log('render', persons.length, 'persons');

  // Handle filter change
  const handleFilterChange = (filterValue) => {
    setNewFilter(filterValue);
  };

  // Add a new person
  const addPerson = (newPerson) => {
    setPersons([...persons, newPerson]);
  };

  return (
    <div>
      <h2>Notes</h2>
      {notes.map(note => (
        <Note key={note.id} note={note} />
      ))}

      <h2>Phonebook</h2>

      {/* Filter component */}
      <Filter handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      {/* PersonForm component */}
      <PersonForm addPerson={addPerson} />

      <h3>Numbers</h3>

      {/* Persons component */}
      <Persons persons={persons} newFilter={newFilter} />
    </div>
  );
};

export default App;

import './Crud.css';
import React, { useState, useEffect } from 'react';

const Crud = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const baseURL = 'http://localhost:3000/items';

  // Leer items al cargar el componente
  useEffect(() => {
    fetchItems();
  }, []);

  // Fetch items
  const fetchItems = async () => {
    try {
      const response = await fetch(baseURL);
      if (response.ok) {
        const data = await response.json();
        setItems(data);
      } else {
        console.error('Error fetching items:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  // Crear item
  const createItem = async () => {
    try {
      const newItem = { name: inputValue };
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem)
      });
      if (response.ok) {
        const data = await response.json();
        setItems([...items, data]);
        setInputValue('');
      } else {
        console.error('Error creating item:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  // Actualizar item
  const updateItem = async (id) => {
    const newName = prompt('Enter new name:');
    if (newName) {
      try {
        const response = await fetch(`${baseURL}/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: newName })
        });
        if (response.ok) {
          const data = await response.json();
          setItems(items.map(item => (item.id === id ? data : item)));
        } else {
          console.error('Error updating item:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating item:', error);
      }
    }
  };

  // Eliminar item
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`${baseURL}/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setItems(items.filter(item => item.id !== id));
      } else {
        console.error('Error deleting item:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h1>Simple CRUD</h1>
      <div className="form-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter item"
        />
        <button onClick={createItem}>Add Item</button>
      </div>
      <div className="items-container">
        {items.map(item => (
          <div key={item.id} className="item">
            {item.name}
            <button onClick={() => updateItem(item.id)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crud;
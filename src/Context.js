import { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

const initialValue = {
  users: [
    { name: "Jose", surname: "Smith Perez", address: "C/Ayala", city: "Malaga", postCode: 29130, telephone: 952245654 },
    { name: "Juan", surname: "Sanchez Galeo", address: "C/Cruz Humilladero", city: "Malaga", postCode: 29340, telephone: 952567648 },
    { name: "Michael", surname: "Jonas Matias", address: "C/Carreteria", city: "Malaga", postCode: 28230, telephone: 952789695 } 
  ],
  shop: {
    electronic: [
        {id: 27, product: "TV", brand: "LG", model: "XP7302", price: 399},
        {id: 28, product: "Equipment Hi-FI", brand: "Sansung", model: "VF235", price: 179},
        {id: 29, product: "Video", brand: "Sony", model: "Bravia-173", price: 798}
    ],
    food: [
        {id: 30, product: "Cockies", brand: "Maria", price: 0.90},
        {id: 31, product: "Salad", brand: "Imizurra", price: 1.30},
        {id: 32, product: "Potatoes", brand: "MCKain", price: 0.90},
        {id: 33, product: "Pasta", brand: "Gallo", price: 0.90}
    ],
    pets: [
        {id: 34, product: "Cat Perfume", brand: "Purina", price: 4.90},
        {id: 35, product: "Cat sand", brand: "Limpior", price: 1.10}
    ]
  },
  books: [
    {number: 1, title: "The Selfish Gene", author: "Richard Dawkins", sales: 740120, price: 12},
    {number: 2, title: "The God Delusion", author: "Richard Dawkins", sales: 610120, price: 15},
    {number: 3, title: "La nueva mente del emperador", author: "Roger Penrose", sales: 120000, price: 17},
    {number: 4, title: "Sapiens: A brief history of Huamkind", author: "Yuval Noah Harari", sales: 89561, price: 16},
    {number: 5, title: "The Selfish Gene", author: "Richard Dawkins", sales: 456372, price: 12},
    {number: 6, title: "Don Quixote", author: "Miguel Cervantes", sales: 123654, price: 18},
    {number: 7, title: "Lord Of The Rings", author: "J.R.R.Tolkien", sales: 122360, price: 12},
    {number: 8, title: "Harry Potter", author: "J.k.Rowling", sales: 999532, price: 29},
    {number: 9, title: "And Then There Were None", author: "Agatha Christie", sales: 111664, price: 21},
    {number: 10, title: "Alice's Adventures in Wonderland", author: "Lewis Carroll", sales: 774488, price: 32}  
  ],
}

const GlobalContextProvider = (props) => {

  const [data, setData] = useState(initialValue);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        const dataFiltered = data.filter(toDo => toDo.userId === 1);
        const toDos = dataFiltered.map(task => {
          return {
            userId: task.userId,
            title: task.title,
            completed: task.completed,
          }
        })
        setData(prevState => ({...prevState,toDos}))
      })
  }, []);

  return (
    <GlobalContext.Provider value={{data, setData}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider


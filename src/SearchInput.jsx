import React, { useState } from 'react'
import {data} from './data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CiSearch } from "react-icons/ci";

import './SearchInput.css'

function SearchInput() {
  const [book,setBook]= useState('')
  const hendel = (value)=>{
    setBook(value)
    
  }
   
  return (
    <div className='container'>
        <div className='input-div'>
          <CiSearch  className='search-icon'/>
          <input 
          type="text" 
          placeholder='search your book...'
          value={book}
          onChange={(e)=>hendel(e.target.value)}
          />
        </div>
        <div className='content'>
          {data.filter((item)=>{
            return book.toLowerCase() === '' ? null : item.title.toLowerCase().includes(book)
          }).map((item ,key)=>
          
          <Card style={{ width: '14rem', backgroundColor:'aqua' }}>
            <Card.Img className='image' src={require('./' + item.imageLink)} alt={item.title} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
              {item.country}<br/>
              {item.pages}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          )}
        </div>
        
        
    </div>
  )
}

export default SearchInput
//import logo from './logo.svg';
import './App.css';
import React, {state, useState } from 'react';
//import Multiselect from 'multiselect-react-dropdown';
import Select from 'react-select';
import {
  LikeOutlined,
  DislikeOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
//import { Dropdown, message, Space } from 'antd';
//import { movies$ } from './list/movies';

function App() {

  //const onClick = ({ key }) => {
  //  message.info(`Click on item ${key}`);
  //};
  const  categories = [
    {
      value: 'Animation',
      label: 'Animation',
    },
    {
      value:'Comedy',
      label: 'Comedy',
    },
    {
      value: 'Drame',
      label: 'Drame',
    },
    {
      value:'Thriller',
      label: 'Thriller',
    },
  ];
  
  //const [movies]= useState([{
const movies=[
      {id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12
  }
    ];
  
//]);

const [movie,setMovie]= React.useState(movies);
const [options,setCategories]= React.useState(categories)


function deleteCat(category){
  const newCat=[...options];
  
  movie.map((m)=>((m.category===category)?newCat=newCat.filter((cat)=>cat.value !== category): newCat))

  setCategories(newCat);
};
function deleteMovie(id,category){
  const newList=movie.filter((l)=>l.id !== id);
  setMovie(newList);
  deleteCat(category);
};
function handleLikes(id){
 const newMovies=[...movie];
 newMovies.map((m)=>(m.id===id? m.likes=m.likes+1: m.likes));
 setMovie(newMovies);
};
function handleDislikes(id){ 
  const newMovies=[...movie];
  newMovies.map((m)=>(m.id===id? m.dislikes=m.dislikes+1: m.dislikes));
  setMovie(newMovies);
};

  return (
   <div>
      <section>
        <div className="container">
          <h1>Movies List</h1>
          <div >
            <Select className='filter'
            options={categories}
            isMulti
            onChange={()=>console.log('chosen')}/>
                  </div>
          
          <div className="cards">
            {movie.map((item)=>(
            <div key={item.id} className="card">
              <h3>{item.title}</h3>
              <h3>{item.category}</h3>
              <div className='cardButtom'>
                <button onClick={()=>deleteMovie(item.id,item.category)}><DeleteOutlined /> Delete</button>
                <button onClick={()=>handleLikes(item.id)}><LikeOutlined /> Like {item.likes}</button>
                <button onClick={()=>handleDislikes(item.id)}><DislikeOutlined /> Dislike {item.dislikes}</button>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
   </div>
  );
}

export default App;

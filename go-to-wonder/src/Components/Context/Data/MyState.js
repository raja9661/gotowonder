import React, { useEffect, useState } from 'react'
import myContext from './myContext'
// import data from '../../../DataBase/Data';

function MyState(props) {

    const [login,setLogin]  = useState(false);
    // useEffect(()=>{
    //   const storedlogin = localStorage.getItem('login');
    //   console.log(storedlogin);
    //   if(storedlogin){
    //     setLogin(true);
    //   }
    // },[])
    // useEffect(()=>{
    //   localStorage.setItem('login',login);
    // },[login]);
    // console.log(login);
    const [category,setCategory] = useState('all')
    const database = {
        name:"Raja",
        branch:"B.tech CSE"
    }
  return (
    <div>
      <myContext.Provider value={ {database,login,setLogin,setCategory,category} }>
        { props.children }
      </myContext.Provider>
    </div>
  )
}

export default MyState;

import { useState } from 'react';
import './App.css';

import AddToList from './components/AddToList/AddToList';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch()
  const activityGetState = useSelector((state) => state.map(state => state.active))


  const addActivity = newActivity => {
    dispatch(activityGetState.removeItem(newActivity))
  }


  return (
    <div className='background'>
      <div className="App">
        <Header />
        <ul className='app_ul'>
          <AddToList addActivity={addActivity} />
          <Content />
        </ul>
        <Footer />
      </div>
    </div>
    // 
  );
}

export default App;

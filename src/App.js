
import './App.css';
import TabHeader from './components/TabHeader';
import {useState} from 'react';

function App() {
  const [tab, setTab] = useState([
    {
      index: 0,
      title: 'when',
      content: "Now",
      selected: true
    },
    {
      index: 1,
      title: 'what',
      content: "A knife",
      selected: false
    },
    {
      index: 2,
      title: 'where',
      content: "Over there",
      selected: false
    },
  ])
  const clickedHandler = item => {
    const myTabs = [...tab];
    myTabs.forEach((item) => item.selected = false);
    setTab(myTabs);
    const editTab = tab[item];
    editTab.selected= true;
    setTab([...tab.slice(0,item), editTab, ...tab.slice(item+1)]);
  }
  return (
    <div className="App">
      {
        tab.map((item, i) =>{
          return <>
          <TabHeader tabItem={item} key={i} Clicked={ clickedHandler }/>
          </>
        })
      }
      {
        tab.map((item, i) => {
          return item.selected ? <h2>{item.content}</h2> : ""
        })
      }
    </div>
  );
}

export default App;

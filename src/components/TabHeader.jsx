import React, {useState} from 'react';

const TabHeader = props => {
    const selected={
        backgroundColor: 'cyan'
    }
    const notSelected={
        backgroundColor: 'grey'
    }
    const selectHandler= e =>{
        props.Clicked(props.tabItem.index)
    }
    return(
        <button onClick={selectHandler} style= {props.tabItem.selected ? selected : notSelected}>{props.tabItem.title}</button>
    );
}
export default TabHeader;
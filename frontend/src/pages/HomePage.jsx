import React from 'react'
import ThreewaySplit from '../_Layouts/ThreewaySplit';
import Items from '../components/Items';
import ShoppingList from '../components/ShoppingList';
import { Sidebar } from '../components/Sidebar';
const HomePage = () => {
  return (
    <ThreewaySplit panelLeft={<Sidebar/>} Content={<Items/>} panelRight={<ShoppingList/>}/>
  )
}

export default HomePage
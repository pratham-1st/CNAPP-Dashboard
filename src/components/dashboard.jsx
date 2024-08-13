import React from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';
import SearchBar from './SearchBar';
import './Dashboard.css'


const Dashboard = () => {
  const categories = useSelector((state) => state.widgets.categories);

  return (
    <div className="dashboard">
        <SearchBar />
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Dashboard;

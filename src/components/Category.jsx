import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../features/windowSlice';
import Widget from './Widget';
import './Dashboard.css'

const Category = ({ category }) => {
  const dispatch = useDispatch();
  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetContent, setNewWidgetContent] = useState('');

  const handleAddWidget = () => {
    const widget = {
      id: Date.now(),
      name: newWidgetName,
      content: newWidgetContent
    };
    dispatch(addWidget({ categoryId: category.id, widget }));
    setNewWidgetName('');
    setNewWidgetContent('');
  };

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widgets">
        {category.widgets.map(widget => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
      </div>
      <div className="add-widget-form">
        <input
          type="text"
          placeholder="Widget Name"
          value={newWidgetName}
          onChange={(e) => setNewWidgetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Content"
          value={newWidgetContent}
          onChange={(e) => setNewWidgetContent(e.target.value)}
        />
        <button onClick={handleAddWidget}>+ Add Widget</button>
      </div>
    </div>
  );
};

export default Category;

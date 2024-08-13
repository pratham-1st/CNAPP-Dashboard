
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../features/windowSlice';
import './Dashboard.css'

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemoveWidget = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.content}</p>
      <button onClick={handleRemoveWidget}>X</button>
    </div>
  );
};

export default Widget;

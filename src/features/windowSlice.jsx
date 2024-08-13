// src/features/widgetsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Widget 1", content: "Random text for widget 1" },
        { id: 2, name: "Widget 2", content: "Random text for widget 2" }
      ]
    },
    {
      id: 2,
      name: "Another Category",
      widgets: [
        { id: 3, name: "Widget 3", content: "Random text for widget 3" }
      ]
    }
  ]
};

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    }
  }
});

export const { addWidget, removeWidget } = widgetsSlice.actions;

export default widgetsSlice.reducer;

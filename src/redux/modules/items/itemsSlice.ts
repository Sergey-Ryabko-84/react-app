import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemsStateType, ItemType } from "./types";
import { mockItems } from "@common/mockItems";

const initialState: ItemsStateType = {
  items: mockItems,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ItemType>) {
      state.items.push(action.payload);
    },
    updateItem(state, action: PayloadAction<ItemType>) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const itemsActions = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = { cards: {} };

export const cardsSlice = createSlice({
  name: "cards",
  initialState: initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards[action.payload.id] = { ...action.payload };
    },
  },
});

export const cardsObject = (id) => (state) => state.cards.cards[id];
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;

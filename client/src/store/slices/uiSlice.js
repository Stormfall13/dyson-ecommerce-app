import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isCategoryMenuOpen: false
  },
  reducers: {
    openCategoryMenu: (state) => {
      state.isCategoryMenuOpen = true;
    },
    closeCategoryMenu: (state) => {
      state.isCategoryMenuOpen = false;
    }
  }
});

export const { openCategoryMenu, closeCategoryMenu } = uiSlice.actions;
export default uiSlice.reducer;

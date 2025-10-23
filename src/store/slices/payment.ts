import { createSlice } from "@reduxjs/toolkit";

interface PaymentState {
  showModal: boolean;
  pendingAction: (() => void) | null;
  amount: number;
  description: string;
}

const initialState: PaymentState = {
  showModal: false,
  pendingAction: null,
  amount: 0,
  description: "",
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.showModal = true;
      state.pendingAction = action.payload?.action || null;
      state.amount = action.payload?.amount || 0;
      state.description = action.payload?.description || "";
    },
    hideModal: (state) => {
      state.showModal = false;
      state.pendingAction = null;
      state.amount = 0;
      state.description = "";
    },
    setPendingAction: (state, action) => {
      state.pendingAction = action.payload;
    },
  },
});

export const { showModal, hideModal, setPendingAction } = paymentSlice.actions;
export default paymentSlice.reducer;

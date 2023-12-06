import mongoose from "mongoose";

const BillSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },

    customerPhoneNumber: {
      type: String,
      required: true,
    },

    paymentMethod: {
      type: String,
      required: true,
    },

    subTotal: {
      type: Number,
      required: true,
    },

    cartItems: {
      type: Array,
      required: true,
    },

    tax: {
      type: Number,
      required: true,
    },

    totalAmount: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Bill = mongoose.model("Bills", BillSchema);

export default Bill;

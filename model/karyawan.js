const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const karyawanSchema = new Schema(
  {
    nomorktp: {
      type: String,
      require: true,
    },
    nama: {
      type: String,
      require: true,
    },
    alamat: {
      type: String,
      require: true,
    },
    gaji: {
      type: Number,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
  },
  { collection: "karyawan" }
);

module.exports = mongoose.model("karyawan", karyawanSchema);

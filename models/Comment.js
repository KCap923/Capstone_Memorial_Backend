const { Schema, model } = require('../config/db-connection');

const commentsSchema = new Schema(
  
  {
  name: {
    type: String,
    required: true,
    unique: false,
  },
  relationship: {
    type: String,
    required: true,
    unique: false,
  },
comment: {
    type: String,
    required: true,
    unique: false,
},
date: {
  type: String,
  required: true,
  unique: false,
},
},
{
  timestamps: true,
}

);

module.exports = model('Comments', commentsSchema);

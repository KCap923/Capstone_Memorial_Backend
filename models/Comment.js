const { Schema, model } = require('../config/db-connection');

const commentsSchema = new Schema(
  
  {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  relationship: {
    type: String,
    required: true,
    unique: true,
  },
comment: {
    type: String,
    required: true,
    unique: true,
},
date: {
  type: String,
  required: true,
  unique: true,
},
},
{
  timestamps: true,
}

);

module.exports = model('Comments', commentsSchema);

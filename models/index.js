import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const db = {}
db.mongoose = mongoose
db.url = process.env.MONGODB

const gradeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    min: 0,
    validate(balance) {
      if (balance < 0) throw new Error('Valor negativo para balance')
    },
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
})

const gradesModel = mongoose.model('grades', gradeSchema, 'grades')

export { db, gradesModel }

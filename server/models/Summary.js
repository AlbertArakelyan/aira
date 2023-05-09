import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const summarySchema = mongoose.Schema({
  url: { type: String, require: true },
  summary: { type: String, require: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

export default mongoose.model('Summary', summarySchema);
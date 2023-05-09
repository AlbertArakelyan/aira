import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true, },
  photoPath: { type: String },
  role: { type: String, required: true },
  isEmailVerified: { type: Boolean },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Number },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

export default mongoose.model('User', userSchema);
import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true, },
  photoPath: { type: String },
  isEmailVerified: { type: Boolean },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Number },
});

export default mongoose.model('User', userSchema);
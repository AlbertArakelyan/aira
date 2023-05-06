import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  isEmailVerified: { type: Boolean },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Number },
});

export default mongoose.model('User', userSchema);
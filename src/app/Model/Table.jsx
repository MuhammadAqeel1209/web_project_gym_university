import mongoose from 'mongoose';


const RegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required :true,
  },
  email: {
    type: String,
    required :true,
    unique :true
  },
  phoneNumber: {
    type: String,
    required :true,
  },
  gender: {
    type: String,
    required :true,
  },
  packageType: {
    type: String,
    required :true,
  },
  price: {
    type: String,
    required :true,
  },
  message: {
  type: String,
  },
},
{
  timestamps: true
});

const UserRegistration = mongoose.models.UserRegistration || mongoose.model('UserRegistration', RegisterSchema);

export default UserRegistration;

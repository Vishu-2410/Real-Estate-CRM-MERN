import mongoose from 'mongoose';

// Property Schema
const propertySchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Residential', 'Commercial', 'Land'],
  },
  size: {
    type: String,
    required: [true, 'Size is required'],
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
  },
  budget: {
    type: Number,
    required: [true, 'Budget is required'],
  },
  availability: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,  // Automatically adds createdAt & updatedAt fields
});

const Property = mongoose.model('Property', propertySchema);

export default Property;

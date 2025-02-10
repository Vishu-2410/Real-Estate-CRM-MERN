import Property from "../models/Property.js";

// Create Property
export const createProperty = async (req, res) => {
  const { category, size, location, budget, availability } = req.body;

  if (!category || !size || !location || !budget) {
    return res.status(400).json({
      success: false,
      message: "Category, Size, Location, and Budget are required fields.",
    });
  }

  try {
    const newProperty = await Property.create({
      category,
      size,
      location,
      budget,
      availability,
    });

    res.status(201).json({
      success: true,
      message: "Property added successfully.",
      property: newProperty,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred while adding the property.",
    });
  }
};

// Get All Properties
export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    if (properties.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No property records found.",
      });
    }
    res.status(200).json({
      success: true,
      properties,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred while fetching properties.",
    });
  }
};

// Update Property
export const updateProperty = async (req, res) => {
  const { category, size, location, budget, availability } = req.body;

  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found.",
      });
    }

    property.category = category || property.category;
    property.size = size || property.size;
    property.location = location || property.location;
    property.budget = budget || property.budget;
    property.availability = availability || property.availability;

    await property.save();

    res.status(200).json({
      success: true,
      message: "Property updated successfully.",
      property,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred while updating the property.",
    });
  }
};

// Delete Property
export const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found.",
      });
    }

    await Property.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Property deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "An error occurred while deleting the property.",
    });
  }
};

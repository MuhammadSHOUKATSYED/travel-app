const Review = require('../../models/hotelModel/hotelSchema');
const userModel = require('../../models/userModel/userSchema');
const hotelModel = require('../../models/hotelModel/hotelSchema');
class reviewController {
  static create=async (req, res) =>{
    try {
      const { id, opinion, rating, user, hotels} = req.body;
      const newReview = new Review({
        id,
        opinion,
        rating,
        user: user,
        hotels: hotels,
      });

      const savedReview = await newReview.save();
      return res.status(201).json(savedReview);
    } catch (error) {
      console.error('Error creating review:', error);
      return res.status(500).json({ message: 'Failed to create review.' });
    }
  }
  static index=async (req, res)=> {
    try {
      const reviews = await Review.find().populate(userModel.collection.name, 'username').populate(hotelModel.collection.name, 'name');
      return res.status(200).json(reviews);
    } catch (error) {
      console.error('Error getting reviews:', error);
      return res.status(500).json({ message: 'Failed to get reviews.' });
    }
  }
  static get=async (req, res) =>{
    try {
      const id = req.params.id;
      const review = await Review.findById(id).populate(userModel.collection.name, 'username').populate(hotelModel.collection.name, 'name');

      if (!review) {
        return res.status(404).json({ message: 'Review not found.' });
      }

      return res.status(200).json(review);
    } catch (error) {
      console.error('Error getting review by ID:', error);
      return res.status(500).json({ message: 'Failed to get review.' });
    }
  }
  static update=async (req, res)=> {
    try {
      const id = req.params.id;
      const { opinion, rating } = req.body;
      const updatedReview = await Review.findByIdAndUpdate(
        id,
        { opinion, rating },
        { new: true }
      ).populate(userModel.collection.name, 'username').populate(hotelModel.collection.name, 'name');

      if (!updatedReview) {
        return res.status(404).json({ message: 'Review not found.' });
      }

      return res.status(200).json(updatedReview);
    } catch (error) {
      console.error('Error updating review:', error);
      return res.status(500).json({ message: 'Failed to update review.' });
    }
  }

  // Delete a review by ID
  static delete=async (req, res) =>{
    try {
      const id = req.params.id;
      const deletedReview = await Review.findByIdAndDelete(id);

      if (!deletedReview) {
        return res.status(404).json({ message: 'Review not found.' });
      }

      return res.status(200).json({ message: 'Review deleted successfully.' });
    } catch (error) {
      console.error('Error deleting review:', error);
      return res.status(500).json({ message: 'Failed to delete review.' });
    }
  }
}

module.exports = reviewController;
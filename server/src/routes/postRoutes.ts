import {CLOUD_API_KEY, CLOUD_API_SECRET, CLOUD_CLOUD_NAME} from '../constants';

import Post from '../mongodb/models/post';
import {v2 as cloudinary} from 'cloudinary';
import express from 'express';

const router = express.Router();

cloudinary.config({
  cloud_name: CLOUD_CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET,
});

router.route('/').get(async (req, res) => {
  try {
    const post = await Post.find({});
    res.status(200).json({success: true, data: post});
  } catch (error) {
    res.status(500).json({success: false, message: error});
  }
});

router.route('/').post(async (req, res) => {
  try {
    const {name, prompt, photo} = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });
    console.log(newPost);

    res.status(201).json({succes: true, data: JSON.stringify(newPost)});
  } catch (error) {
    res.status(500).json({success: false, message: error});
  }
});

export default router;

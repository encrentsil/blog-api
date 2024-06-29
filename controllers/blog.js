import { PostModel } from "../models/blog.js";

 export const postBlogs = async (req,res,next) => {

     try {
     const addBlogs = await PostModel.create(req.body);
     res.status(201).json(addBlogs);
    
     } catch (error) {
        next(error) 
     }
 }; 


 export const getBlogs = async (req,res,next) => {

     try {
     const allBlogs = await PostModel.find();
     res.status(200).json(allBlogs);
    
     } catch (error) {
        next(error) 
     }
 };
 
 export const singleBlog = async (req,res,next) => {
   
    try {

        const oneData = await PostModel.findById(req.params.id);
        if (!oneData) {
            // Handle case when document with the given ID is not found
            return res.status(404).json({ error: 'Blog not found' });
          }

        res.status(200).json(oneData);
    } catch (error) {
        next(error)
        
    }
}

export const updateblogs = async (req,res,next) => {

    try {
        const status = req.body.content 
        const updatedata= await PostModel.findByIdAndUpdate(req.params.id,{content: status});
        res.status(200).json(updatedata)
    } catch (error) {
        next(error)
        
    }
}

export const deleteBlog = async (req,res) => {
    
    try {
       const deleteData = await PostModel.findByIdAndDelete(req.params.id)
        res.status(200).json('statement deleted')
    } catch (error) {
      console.log(error)
    }
  }


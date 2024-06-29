import { Router } from "express";
import { getBlogs, singleBlog, postBlogs, updateblogs, deleteBlog, } from "../controllers/blog.js";


const blogRouter = Router();

blogRouter.get('/blogs', getBlogs)

blogRouter.post('/blogs', postBlogs)

blogRouter.get('/blogs/:id', singleBlog)

blogRouter.patch('/blogs/:id', updateblogs)

blogRouter.delete('/blogs/:id', deleteBlog)

export default blogRouter;
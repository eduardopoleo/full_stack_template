class PostsController < ApplicationController
  def index
    @posts = Post.all
    render json: serialize_posts
  end

  def show
    @post = Post.find(params[:id])
    render json: serialize_post
  end


  private

  def serialize_post
    # In order to add the include you have to have defined the has_many comments part of it
    # It needs a comment serializer to know how to serialize comments in the response
    JSONAPI::Serializer.serialize(@post, include: ['comments'])
  end

  def serialize_posts
    JSONAPI::Serializer.serialize(@posts, is_collection: true, include: ['comments'])
  end
end


class PostSerializer < BaseSerializer
  attribute :title
  attribute :content
  attribute :author

  has_many :comments
  #this generates the relationship part
  # relationships: {
  #   comments: {
  #     links: {
  #       self: "/posts/1/relationships/comments",
  #       related: "/posts/1/comments"
  #     }
  #   }
  # }
  # It assumes restful stuff
  #It is necessary for the include to work.

  def id
    "post_#{object.id}" #this will appear on the serialized version
  end
end

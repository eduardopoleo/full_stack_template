require 'jsonapi-serializers'

class BaseSerializer
  include JSONAPI::Serializer

  def base_url
    'https://epoleo.me'
  end
end

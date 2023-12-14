class DocumentSerializer < ActiveModel::Serializer
#  include JSONAPI::Serializer
  attributes :id, :name, :doc_type, :image, :pic ,:pic_url

end

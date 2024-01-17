class DocumentSerializer < ActiveModel::Serializer
#  include JSONAPI::Serializer
  attributes :id, :name, :doc_type, :image 

end

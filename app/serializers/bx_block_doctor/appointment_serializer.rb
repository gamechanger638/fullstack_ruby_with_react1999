module BxBlockDoctor
  class AppointmentSerializer < ActiveModel::Serializer
    attributes :date  

     
    attribute :doctor do |object|
      byebug
      BxBlockDoctor::DoctorSerializer.new(object&.doctor).serializable_hash
    end
  end

end

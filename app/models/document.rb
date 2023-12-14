class Document < ApplicationRecord
    has_one_attached :pic

    def pic_url 
        Rails.application.routes.url_helpers.url_for(pic) if pic.attached?
    end  
     
end

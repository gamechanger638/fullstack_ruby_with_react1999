class Question < ApplicationRecord
    validates :tittle, presence:true ,uniqueness:true
     validates :tag , presence:true  
end

class User < ApplicationRecord
    has_secure_password
#   mount_uploader :avatar, AvatarUploader
# has_one_attached :image
  validates :email, presence: true, uniqueness: true
  validates :first_name, presence: true 
  validates :last_name, presence: true 
  validates :father_name, presence: true 
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :username , uniqueness: true
  validates :password,
            length: { minimum: 6 },
            if: -> { new_record? || !password.nil? }

  has_many :products
end

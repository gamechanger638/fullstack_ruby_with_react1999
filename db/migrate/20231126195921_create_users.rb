class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :mothergotra
      t.string :fathergotra
      t.string :education
      t.string :mother_name
      t.string :father_name
      t.string :city
      t.string :looking_for
      t.datetime :dob
      t.string :gender
    
      t.timestamps
    end
  end
end

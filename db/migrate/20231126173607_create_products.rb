class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :product_name
      t.string :description
      t.integer :quantity
      t.integer :price
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
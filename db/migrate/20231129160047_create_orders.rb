class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.float :amount
      t.datetime :date
      t.references :user ,null:false
      t.timestamps
    end
  end
end

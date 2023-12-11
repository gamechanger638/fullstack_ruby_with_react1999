class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :total_amount
      t.datetime :date

      t.timestamps
    end
  end
end

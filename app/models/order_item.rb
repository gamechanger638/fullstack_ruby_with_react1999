class OrderItem < ApplicationRecord
    self.table_name = 'order_items'
    belongs_to :order 
    belongs_to :product
end

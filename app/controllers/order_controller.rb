class OrderController < ApplicationController


 def create
  if current_user.present?
    @order = current_user.orders(order_params)
  end
 end

 private

 def order_params
    params.require(:order).permit()
 end


end
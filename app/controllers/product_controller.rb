class ProductController < ApplicationController
  def index 
   @product = Product.all
   render json:@product , status: :ok
  end

  def create
    account = current_user
    @product = account.products.new(product_params)
    if @product.save
      render json: @product, status: :ok
    else
      render json: { message: @product.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
  end

  private

  def product_params
    params.require(:product).permit(:product_name , :description , :quantity,  :price)
  end

  def current_user
    if request.headers['token'].present?
      token = request.headers['token']
      token = JsonWebToken.decode(token) 
      @current_user ||= User.find_by_id(token["user_id"])
    end
  end
end

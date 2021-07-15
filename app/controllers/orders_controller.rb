class OrdersController < ApplicationController  
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    before_action :authorized

    def transform
        current_cart = @user.orders.find(params[:id])
        current_cart.update(checkout: true)
        new_cart = @user.orders.create(checkout: false)
        render json: {
            current_cart: OrderSerializer.new(new_cart),
            transformed_cart: OrderSerializer.new(current_cart)
        }
    end
end

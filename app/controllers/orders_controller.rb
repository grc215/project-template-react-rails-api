class OrdersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def create
        order = @user.orders.create!(order_params)
        render json: order, status: 201
    end

    def show
        order = Order.find(params[:id])
        render json: order
    end

private

    def order_params
        params.permit(:date, :checkout)
    end

    def render_not_found
        render json: {error: "Order not found"}, status: 404
    end

    def render_error(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end

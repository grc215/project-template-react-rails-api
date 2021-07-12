class FoodsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        food = Food.all
        render json: food
    end

    def show
        food = Food.find(params[:id])
        render json: food
    end

    private

    def render_not_found
        render json: {error: 'Food not found'}, status: 404
    end
end

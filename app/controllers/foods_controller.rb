class FoodsController < ApplicationController
    def index
        food = Food.all
        render json: food
    end

    def show
        food = Food.find(params[:id])
        render json: food
    end
end

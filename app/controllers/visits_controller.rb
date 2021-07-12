class VisitsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_error
    def create
        visit = Visit.create!(visit_params)
        render json: visit
    end

    def index
        visit = Visit.all
        render json: visit
    end

    def cart 
    # Will need to write code to pull the visit of a specific id
        cart = Visit.all.map{|visit| visit.food}
        render json: cart
    end

private

    def visit_params
        params.permit(:food_id, :order_id, :quantity)
    end

    def render_error(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end

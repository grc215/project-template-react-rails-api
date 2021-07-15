class VisitsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_error
    def create
        order = Order.find_by(id: params[:order_id])
        visit = order.visits.find_by(food_id: params[:food_id])
        if visit
            visit.update(:quantity => visit.quantity += 1)
            render json: visit
        else
            visit = Visit.create!(visit_params)
            render json: visit        
        end
    end

    def destroy
        visit = Visit.find_by(id: params[:id])
        visit.destroy
        render json: {}
    end

    # def index
    #     visit = Visit.all
    #     render json: visit
    # end

    # def cart 
    # # Will need to write code to pull the visit of a specific id
    #     cart = Visit.all.map{|visit| visit.food}
    #     render json: cart
    # end

private

    def visit_params
        params.permit(:food_id, :order_id, :quantity)
    end

    def render_error(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end

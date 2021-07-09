class VisitsController < ApplicationController
    def create
        visit = Visit.create(visit_params)
        render json: visit
    end

private

    def visit_params
        params.permit(:food_id, :order_id, :quantity)
    end

end

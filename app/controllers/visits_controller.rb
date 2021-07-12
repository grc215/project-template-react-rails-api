class VisitsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_error
    def create
        visit = Visit.create!(visit_params)
        render json: visit
    end

private

    def visit_params
        params.permit(:food_id, :order_id, :quantity)
    end

    def render_error(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end

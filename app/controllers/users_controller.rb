class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_error

    def create
        user = User.create!(user_params)
        render json: user, status: 201
    end

    private

    def user_params
        params.permit(:user, :birthday)
    end

    def render_error(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end

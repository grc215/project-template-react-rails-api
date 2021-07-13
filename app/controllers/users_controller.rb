class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_error

    def create
        user = User.create!(user_params)
        render json: user, status: 201
    end

    def login
        user = User.find_by(name: params[:name])
        if user && user.authenticate(params[:password])
            something = encode_token({user_id: user.id})
            render json: {user: UserSerializer.new(user), token: something}
        else
            render json: {error: 'nah'}
        end
    end

    private

    def user_params
        params.permit(:name, :password, :birthday)
    end

    def render_error(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end

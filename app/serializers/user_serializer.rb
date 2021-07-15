class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :current_cart, :past_orders
  
  # has_many :orders
end

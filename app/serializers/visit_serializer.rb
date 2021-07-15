class VisitSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :food_name, :food_price, :food_image
  # has_one :food
end

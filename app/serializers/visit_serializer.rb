class VisitSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_one :food
end

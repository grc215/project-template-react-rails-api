class VisitSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_one :food
  has_one :order
end

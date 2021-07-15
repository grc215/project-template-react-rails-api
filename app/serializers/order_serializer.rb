class OrderSerializer < ActiveModel::Serializer
  attributes :id, :checkout, :timestamp
  # has_one :user
  has_many :visits
  has_many :foods
end

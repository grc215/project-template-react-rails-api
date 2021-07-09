class OrderSerializer < ActiveModel::Serializer
  attributes :id, :date, :checkout
  has_one :user
  has_many :visits
  has_many :foods
end

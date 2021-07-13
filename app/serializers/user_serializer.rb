class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :birthday
  
  has_many :orders
end

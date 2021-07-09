class Order < ApplicationRecord
  belongs_to :user
  has_many :visits
  has_many :foods, through: :visits 
end

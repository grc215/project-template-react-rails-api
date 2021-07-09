class Food < ApplicationRecord
    has_many :visits
    has_many :orders, through: :visits
end

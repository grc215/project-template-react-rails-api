class User < ApplicationRecord
    has_many :orders

    validates :name, presence: true
    validates :birthday, presence: true

end

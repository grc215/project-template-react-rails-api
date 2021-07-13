class User < ApplicationRecord
    has_secure_password
    has_many :orders

    validates :name, uniqueness: {case_sensitive: false}
    # validates :birthday, presence: true
    validates :password, presence: true

end

class User < ApplicationRecord
    has_secure_password
    has_many :orders
    after_create :set_current_cart

    validates :name, uniqueness: {case_sensitive: false}
    # validates :birthday, presence: true
    validates :password, presence: true

    def current_cart
        current_cart = self.orders.find_or_create_by(checkout: false)
        OrderSerializer.new(current_cart)
    end

    def past_orders
        all_past_orders = self.orders.where(checkout: true)
        all_past_orders.map do |order|
            OrderSerializer.new(order)
        end
    end

    private

    def set_current_cart
        self.orders.create
    end
end

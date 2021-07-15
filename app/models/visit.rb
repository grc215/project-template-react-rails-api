class Visit < ApplicationRecord
  belongs_to :food
  belongs_to :order

  def food_name
    self.food.name
  end

  def food_price
    self.food.price
  end

  def food_image
    self.food.image
  end
end

class Order < ApplicationRecord
  belongs_to :user
  has_many :visits
  has_many :foods, through: :visits 

  def timestamp
    self.created_at.strftime("%Y-%m-%d")
  end
end

class CreateVisits < ActiveRecord::Migration[6.1]
  def change
    create_table :visits do |t|
      t.belongs_to :food, null: false, foreign_key: true
      t.belongs_to :order, null: false, foreign_key: true
      t.integer :quantity, default: 1

      t.timestamps
    end
  end
end

class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.date :date
      t.boolean :checkout, default: false

      t.timestamps
    end
  end
end

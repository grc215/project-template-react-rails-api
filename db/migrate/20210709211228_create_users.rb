class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password_digest
      t.date :birthday

      t.timestamps
    end
  end
end

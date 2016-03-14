class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :detail
      t.date :deadline
      t.integer :category
      t.timestamps null: false
    end
  end
end

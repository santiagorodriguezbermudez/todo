class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :description
      t.integer :state
      t.belongs_to :user, foreign_key: true
      t.timestamps
    end
  end
end

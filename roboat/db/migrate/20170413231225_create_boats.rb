class CreateBoats < ActiveRecord::Migration[5.0]
  def change
    create_table :boats do |t|
      t.float :battery_status
      t.float :speed
      t.float :compass

      t.timestamps
    end
  end
end

class AddLocationToCollect < ActiveRecord::Migration[5.0]
  def change
    add_reference :collects, :location, foreign_key: true
  end
end

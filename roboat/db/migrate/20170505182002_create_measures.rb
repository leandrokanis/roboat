class CreateMeasures < ActiveRecord::Migration[5.0]
  def change
    create_table :measures do |t|
      t.decimal :ph
      t.decimal :turbidity
      t.decimal :temperature
      t.decimal :conductivity
      t.decimal :latitude
      t.decimal :longitude
      t.belongs_to :collect

      t.timestamps
    end
  end
end

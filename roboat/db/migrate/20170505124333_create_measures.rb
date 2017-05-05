class CreateMeasures < ActiveRecord::Migration[5.0]
  def change
    create_table :measures do |t|
      t.string :name
      t.belongs_to :collect

      t.timestamps
    end
  end
end

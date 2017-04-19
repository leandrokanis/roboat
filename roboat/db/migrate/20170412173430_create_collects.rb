class CreateCollects < ActiveRecord::Migration[5.0]
  def change
    create_table :collects do |t|
      t.decimal :ph
      t.decimal :turbidity
      t.decimal :temperature
      t.decimal :conductivity
      t.datetime :date

      t.timestamps
    end
  end
end

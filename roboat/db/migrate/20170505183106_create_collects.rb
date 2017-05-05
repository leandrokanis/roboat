class CreateCollects < ActiveRecord::Migration[5.0]
  def change
    create_table :collects do |t|
      t.string :title

      t.timestamps
    end
  end
end

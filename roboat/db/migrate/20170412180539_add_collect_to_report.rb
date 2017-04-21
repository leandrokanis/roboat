class AddCollectToReport < ActiveRecord::Migration[5.0]
  def change
    add_reference :reports, :collect, foreign_key: true
  end
end

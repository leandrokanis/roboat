class CreateReports < ActiveRecord::Migration[5.0]
  def change
    create_table :reports do |t|
      t.datetime :begin_date
      t.datetime :end_date

      t.timestamps
    end
  end
end

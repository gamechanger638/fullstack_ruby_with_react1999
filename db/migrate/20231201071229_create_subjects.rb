class CreateSubjects < ActiveRecord::Migration[7.0]
  def change
    create_table :subjects do |t|
      t.string :name
      t.references :teacher , null:false
      t.references :student , null:false
      t.timestamps
    end
  end
end

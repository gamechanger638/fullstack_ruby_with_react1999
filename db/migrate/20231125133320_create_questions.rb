class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :tittle
      t.string :tag

      t.timestamps
    end
  end
end

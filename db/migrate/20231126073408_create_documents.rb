class CreateDocuments < ActiveRecord::Migration[7.0]
  def change
    create_table :documents do |t|
      t.string :name
      t.string :doc_type
      t.string :image

      t.timestamps
    end
  end
end

class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :title
      t.integer :cbd
      t.float :price
      t.float :tch
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end

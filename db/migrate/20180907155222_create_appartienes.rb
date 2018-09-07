class CreateAppartienes < ActiveRecord::Migration[5.1]
  def change
    create_table :appartienes do |t|
      t.integer :quantita
      t.belongs_to :product, index: true 
      t.belongs_to :order, index: true
      t.timestamps
    end
  end
end

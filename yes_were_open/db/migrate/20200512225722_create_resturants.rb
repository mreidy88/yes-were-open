class CreateResturants < ActiveRecord::Migration[6.0]
  def change
    create_table :resturants do |t|
      t.string :name
      t.string :email
      t.string :socialMedia
      t.string :imageurl
      t.string :sub_category

      t.timestamps
    end
  end
end

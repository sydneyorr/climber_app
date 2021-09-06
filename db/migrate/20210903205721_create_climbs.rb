class CreateClimbs < ActiveRecord::Migration[6.1]
  def change
    create_table :climbs do |t|
      t.string :name
      t.string :rating
      t.string :location

      t.timestamps
    end
  end
end

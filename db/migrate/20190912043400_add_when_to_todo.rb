class AddWhenToTodo < ActiveRecord::Migration[5.1]
  def change
    add_column :todos, :when, :datetime
  end
end

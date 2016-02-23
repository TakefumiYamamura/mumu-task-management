class Task < ActiveRecord::Base
  enum category: %i(todo doing done)
  
  has_many :tasks_users
  has_many :users, through: :tasks_users
  accepts_nested_attributes_for :tasks_users, allow_destroy: true

end

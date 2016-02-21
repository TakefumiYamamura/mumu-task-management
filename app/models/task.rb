class Task < ActiveRecord::Base
  enum category: %i(todo doing done)

end

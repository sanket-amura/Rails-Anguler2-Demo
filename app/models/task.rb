class Task
  include Mongoid::Document
  field :name, type: String
  field :description, type: String
  field :is_completed, type: Mongoid::Boolean, default: ->{ false }
  field :priority, type: Mongoid::Boolean

end

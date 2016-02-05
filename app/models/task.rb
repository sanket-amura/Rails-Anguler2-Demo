class Task
  include Mongoid::Document
  field :description, type: String
  field :priority, type: Mongoid::Boolean
end

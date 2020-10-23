class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :state, :user
end
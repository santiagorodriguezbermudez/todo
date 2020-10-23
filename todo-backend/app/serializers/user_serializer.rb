class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :tasks
end
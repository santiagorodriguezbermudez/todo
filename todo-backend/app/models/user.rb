class User < ApplicationRecord
  has_many :tasks

  validates uniqueness: :name
end

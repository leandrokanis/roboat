class Collect < ApplicationRecord
	has_one :location
      has_many :measures

      accepts_nested_attributes_for :measures
end

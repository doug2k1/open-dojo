# == Schema Information
#
# Table name: streams
#
#  id         :integer          not null, primary key
#  device_id  :integer
#  body       :text
#  created_at :datetime
#  updated_at :datetime
#

class Stream < ActiveRecord::Base
  belongs_to :device
  
  validates :device_id, presence: true
end

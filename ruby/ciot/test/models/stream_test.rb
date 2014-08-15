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

require 'test_helper'

class StreamTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

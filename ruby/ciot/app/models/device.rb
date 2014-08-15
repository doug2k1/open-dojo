# == Schema Information
#
# Table name: devices
#
#  id          :integer          not null, primary key
#  key         :string(255)
#  name        :string(255)
#  description :text
#  created_at  :datetime
#  updated_at  :datetime
#

class Device < ActiveRecord::Base
  has_many :streams
  before_create :generate_key
  validates :name, presence: true
  
  private
    def generate_key
      self.key = loop do
        token = SecureRandom.urlsafe_base64
        break token unless Device.exists?(key: token)
      end
    end

end

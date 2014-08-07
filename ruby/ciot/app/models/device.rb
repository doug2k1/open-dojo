class Device < ActiveRecord::Base
  has_many :streams

  before_create :generate_key

  private
    def generate_key
      self.key = loop do
        token = SecureRandom.urlsafe_base64
        break token unless Device.exists?(key: token)
      end
    end

end

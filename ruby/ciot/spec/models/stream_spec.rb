require 'rails_helper'

describe Stream do
  let(:stream) { FactoryGirl.create(:stream) }
  subject { stream }
  
  it { is_expected.to respond_to(:device) }
  it { is_expected.to respond_to(:device_id) }
  it { is_expected.to respond_to(:body) }
  it { is_expected.to be_valid }
  
  context 'without a device' do
    before { stream.device_id = nil }
    
    it { is_expected.not_to be_valid }
  end
end
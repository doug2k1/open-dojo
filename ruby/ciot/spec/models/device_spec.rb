require 'rails_helper'

describe Device do
  let(:device) { FactoryGirl.create(:device) }
  subject { device }
  
  it { is_expected.to respond_to(:key) }
  it { is_expected.to respond_to(:name) }
  it { is_expected.to respond_to(:description) }
  it { is_expected.to be_valid }
  
  context 'without a name' do
    before { device.name = '' }
    
    it { is_expected.not_to be_valid }
  end
end
require 'rails_helper'

describe Device do
  let(:device) { FactoryGirl.create(:device) }
  subject { device }

  it { is_expected.to be_valid }
  
  context 'without a name' do
    before { device.name = '' }
    
    it { is_expected.not_to be_valid }
  end
end
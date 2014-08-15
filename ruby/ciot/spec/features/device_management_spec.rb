require 'rails_helper'

describe 'Device management' do
  context 'listing devices' do
    it 'shows the devices list' do
      devices = FactoryGirl.create_list(:device, 2)
      visit devices_path

      devices.each do |device|
        expect(page).to have_css('td', text: device.key)
        expect(page).to have_css('td', text: device.name)
      end
    end
  end
  
  context 'creating devices' do
    it 'creates a device with valid information' do
      visit new_device_path
      fill_in 'device_name', with: 'Device 1'
      
      expect { click_button 'Create Device' }.to change(Device, :count).by(1)
    end
    
    it 'does not create a device with invalid information' do
      visit new_device_path
      
      expect { click_button 'Create Device' }.not_to change(Device, :count)
    end
  end
  
  context 'showing a device' do
    it 'shows the device information' do
      device = FactoryGirl.create(:device)
      visit device_path(device)

      expect(page).to have_content(device.key)
      expect(page).to have_content(device.name)
    end
  end
  
  context 'editing a device' do
    it 'changes the device with valid information' do
      device = FactoryGirl.create(:device)
      new_name = 'Device Modified'
      visit edit_device_path(device)
      fill_in 'device_name', with: new_name
      click_button 'Update Device'

      expect(page).to have_content(device.key)
      expect(page).to have_content(new_name)
    end
    
    it 'does not change the device with invalid information' do
      device = FactoryGirl.create(:device)
      visit edit_device_path(device)
      fill_in 'device_name', with: ''
      click_button 'Update Device'

      expect(page).to have_css('#error_explanation')
    end
  end
  
  context 'destroying a device' do
    it 'removes a device when clicking Destroy' do
      FactoryGirl.create_list(:device, 2)
      visit devices_path
      
      expect { first(:link, 'Destroy').click }.to change(Device, :count).by(-1)
    end
  end
end

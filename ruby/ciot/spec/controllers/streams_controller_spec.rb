require 'rails_helper'

describe StreamsController do
  describe 'POST #new' do
    let(:stream_body) { '{"test":true}' }
    
    context 'without a key' do
      it 'returns status bad request' do
        post :new

        expect(response.status).to eq(400)
      end
    end
    
    context 'with a invalid key' do
      it 'returns status bad request' do
        request.headers['key'] = 'invalid-key'
        post :new

        expect(response.status).to eq(400)
      end
    end
    
    context 'with a valid key' do
      let(:device) { FactoryGirl.create(:device) }
      before do
        request.headers['key'] = device.key
        request.env['RAW_POST_DATA'] = stream_body
        post :new
      end
      
      it 'returns status ok' do
        expect(response.status).to eq(200)
      end
      
      it 'creates a new stream' do
        stream = Stream.where(device_id: device.id, body: stream_body).first
        expect(stream).to be_truthy
      end
    end
  end
end

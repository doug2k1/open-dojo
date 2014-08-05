class StreamsController < ApplicationController
  protect_from_forgery :except => :new
  
  def new
    key = request.headers['key']
    device = Device.find_by_key(key) if key
    
    unless device
      render status: :bad_request and return
    end
    
    device.streams.create(body: request.body.read)
    
    render status: :ok
  end
end

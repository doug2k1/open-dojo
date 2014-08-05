class StreamsController < ApplicationController
  protect_from_forgery :except => :new
  
  def new
    key = request.headers['key']
    device = Device.find_by_key(key) if key
    
    if device
      device.streams.create(body: request.body.read)
      render status: :ok
    else
      render status: :bad_request
    end
  end
end

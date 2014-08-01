class StreamsController < ApplicationController
  protect_from_forgery :except => :new
  
  def new
    key = request.headers['key']
    device = Device.find_by_key(key)
    
  end
end

class HomeController < ApplicationController
  def index
    @rates = Rate.all
  end

  
end

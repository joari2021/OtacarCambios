Rails.application.routes.draw do
  resources :rates
  resources :banks
  devise_for :users, :controllers => { registrations: 'registrations' }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/user' => "home#index", :as => :user_root
  
end

=begin
devise_for :users, controllers: {
    sessions: 'users/sessions'
}
=end


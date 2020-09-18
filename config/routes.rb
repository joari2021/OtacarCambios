Rails.application.routes.draw do
  resources :transactions
  get "/status_transactions", to: "transactions#status"
  resources :rates
  resources :banks
  devise_for :users, :controllers => { registrations: 'registrations' }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/user' => "home#index", :as => :user_root
end



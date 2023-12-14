Rails.application.routes.draw do
 
  # get 'document#index'
  # get 'document/create'
  root 'home#index'

  resources :users, param: :_username
  post '/auth/login', to: 'authentication#login'
  # get '/*a', to: 'application#not_found'
  
  resources :document, only: [:index, :create, :update]  
  resources :product, only: [:index, :create, :destroy] # Use a colon ':' instead of square brackets '[]'

   
  namespace :api do
    resources :questions 
  end  
 end

Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :users, param: :_username
  post '/auth/login', to: 'authentication#login'
  get '/*a', to: 'application#not_found'

  namespace :bx_block_doctor do
    resources :doctor, only: [:index, :show, :create, :update, :destroy]
    resources :patient, only: [:index, :show, :create, :update, :destroy]
    resources :appointment, only: [:index, :show, :create, :update, :destroy]
  end
end

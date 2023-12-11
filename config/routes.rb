Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :bx_block_doctor do
    resources :doctor, only: [:index, :show, :create, :update, :destroy]
  end
end

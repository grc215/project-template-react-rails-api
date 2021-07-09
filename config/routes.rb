Rails.application.routes.draw do
  
  resources :foods, only: [:show]
  resources :visits, only: [:create]
  resources :orders, only: [:create, :show]
  resources :users, only: [:create]

  get '/menu', to: 'foods#index'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

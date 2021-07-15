Rails.application.routes.draw do
  
  resources :visits, only: [:create, :destroy, :update]
  resources :users, only: [:create]

  post '/login', to: 'users#login'
  get '/menu', to: 'foods#index'
  patch '/orders/:id/transform', to: 'orders#transform'
  # get '/cart', to: 'visits#cart'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

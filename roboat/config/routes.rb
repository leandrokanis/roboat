Rails.application.routes.draw do
  resources :collects
  resources :measures
  resources :locations
  resources :boats
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

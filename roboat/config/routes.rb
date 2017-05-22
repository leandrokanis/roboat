Rails.application.routes.draw do
  get 'wellcome/index'

  root 'wellcome#index'

  resources :collects
  resources :measures
  resources :boats
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  devise_for :users
  get 'wellcome/index'
  root 'wellcome#index'
  
  get 'collects/:id/receive_data_from_xbee' => 'collects#receive_data_from_xbee'

  resources :collects
  resources :measures
  resources :boats
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

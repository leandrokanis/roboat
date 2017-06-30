Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    root to: "devise/sessions#new"
  end

  get 'wellcome/index'
  get 'collects/:id/receive_data_from_xbee' => 'collects#receive_data_from_xbee'

  resources :collects
  resources :measures
  resources :boats
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

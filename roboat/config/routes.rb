Rails.application.routes.draw do
  devise_for :users, :controllers => {:registrations => "registrations"}
  get 'wellcome/index'

  devise_scope :user do
    authenticated :user do
      root 'collects#new', as: :authenticated_root
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end

  get 'collects/:id/receive_data_from_xbee' => 'collects#receive_data_from_xbee'

  resources :collects
  resources :measures
  resources :boats
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

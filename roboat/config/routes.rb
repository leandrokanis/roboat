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

  get 'collects/:id/receive_measure_0' => 'collects#receive_measure_0'
  get 'collects/:id/receive_measure_1' => 'collects#receive_measure_1'
  get 'collects/:id/receive_measure_2' => 'collects#receive_measure_2'
  get 'collects/:id/left' => 'collects#left'
  get 'collects/:id/right' => 'collects#right'
  get 'collects/:id/forward' => 'collects#forward'
  get 'collects/:id/back' => 'collects#back'

  resources :collects
  resources :measures
  resources :boats
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

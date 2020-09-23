Rails.application.routes.draw do
  resources :ice_creams, only: [:index, :show] do
    resources :pints, only: [:index, :create, :update, :delete]
  end
end

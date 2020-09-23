Rails.application.routes.draw do
    resources :pints
    resources :ice_creams
      resources :pints
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

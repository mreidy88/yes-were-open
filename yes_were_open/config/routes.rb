Rails.application.routes.draw do
  post "/auth/login", to: "authentication#login"
  # post "/restaurantCreate" to: "restaurants"
  resources :categories
  resources :resturants
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

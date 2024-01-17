Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'http://127.0.0.1:3000' # Adjust the allowed origin
      resource '/document', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options]
      resource '/users', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options]
    end
  end
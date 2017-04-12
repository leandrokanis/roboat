json.extract! collect, :id, :ph, :turbidity, :temperature, :conductivity, :date, :created_at, :updated_at
json.url collect_url(collect, format: :json)

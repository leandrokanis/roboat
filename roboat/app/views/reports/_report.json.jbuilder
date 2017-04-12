json.extract! report, :id, :begin_date, :end_date, :collect_id, :created_at, :updated_at
json.url report_url(report, format: :json)

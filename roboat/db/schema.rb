# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170505124333) do

  create_table "boats", force: :cascade do |t|
    t.float    "battery_status"
    t.float    "speed"
    t.float    "compass"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "user_id"
  end

  create_table "collects", force: :cascade do |t|
    t.decimal  "ph"
    t.decimal  "turbidity"
    t.decimal  "temperature"
    t.decimal  "conductivity"
    t.datetime "date"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "location_id"
    t.index ["location_id"], name: "index_collects_on_location_id"
  end

  create_table "locations", force: :cascade do |t|
    t.decimal  "latitude"
    t.decimal  "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "measures", force: :cascade do |t|
    t.string   "name"
    t.integer  "collect_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["collect_id"], name: "index_measures_on_collect_id"
  end

  create_table "reports", force: :cascade do |t|
    t.datetime "begin_date"
    t.datetime "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "collect_id"
    t.index ["collect_id"], name: "index_reports_on_collect_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.integer  "boat_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["boat_id"], name: "index_users_on_boat_id"
  end

end

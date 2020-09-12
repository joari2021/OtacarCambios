# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_10_200047) do

  create_table "banks", force: :cascade do |t|
    t.string "name"
    t.string "identidy"
    t.string "country"
    t.string "state"
    t.string "bank"
    t.string "number_account"
    t.string "type_account"
    t.string "cod_bank"
    t.string "phone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id", default: 1, null: false
    t.index ["user_id"], name: "index_banks_on_user_id"
  end

  create_table "rates", force: :cascade do |t|
    t.string "country"
    t.string "moneda"
    t.integer "monto_oferta"
    t.decimal "rate_argentina", precision: 9, scale: 3
    t.decimal "rate_argentina_min", precision: 9, scale: 3
    t.decimal "rate_brasil", precision: 9, scale: 3
    t.decimal "rate_brasil_min", precision: 9, scale: 3
    t.decimal "rate_chile", precision: 9, scale: 3
    t.decimal "rate_chile_min", precision: 9, scale: 3
    t.decimal "rate_ecuador", precision: 9, scale: 3
    t.decimal "rate_ecuador_min", precision: 9, scale: 3
    t.decimal "rate_españa", precision: 9, scale: 3
    t.decimal "rate_españa_min", precision: 9, scale: 3
    t.decimal "rate_panama", precision: 9, scale: 3
    t.decimal "rate_panama_min", precision: 9, scale: 3
    t.decimal "rate_peru", precision: 9, scale: 3
    t.decimal "rate_peru_min", precision: 9, scale: 3
    t.decimal "rate_portugal", precision: 9, scale: 3
    t.decimal "rate_portugal_min", precision: 9, scale: 3
    t.decimal "rate_usa", precision: 9, scale: 3
    t.decimal "rate_usa_min", precision: 9, scale: 3
    t.decimal "rate_venezuela", precision: 9, scale: 3
    t.decimal "rate_venezuela_min", precision: 9, scale: 3
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.string "last_name"
    t.string "document"
    t.string "phone"
    t.integer "day"
    t.string "month"
    t.integer "year"
    t.string "gender"
    t.string "country"
    t.string "state"
    t.string "city"
    t.string "address"
    t.string "num_user"
    t.integer "permission_level", default: 1
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "banks", "users"
end

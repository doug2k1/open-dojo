FactoryGirl.define do
  factory :device do
    sequence(:name) { |n| "Device #{n}" }
    description "Test description"
  end
  
  factory :stream do
    body "{\"factory\": true}"
    device
  end
end
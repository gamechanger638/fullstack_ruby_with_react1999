FactoryBot.define do
    factory :doctor, class: 'BxBlockDoctor::Doctor' do
      name { 'John Doe' }
      age { 30 }
    end
  end

 
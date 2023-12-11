# spec/controllers/bx_block_doctor/doctor_controller_spec.rb

require 'rails_helper'

RSpec.describe BxBlockDoctor::DoctorController, type: :controller do

    let(:create_doctor) do
        {
          "doctor":
          {"name": "rahulgaud",
          "age": 23
          }
    }
      end


  describe 'POST #create' do
    it 'creates a new doctor' do
      post :create, params: create_doctor
      expect(response).to have_http_status(201)
      expect(JSON.parse(response.body)['message']).to eq('doctor created successfully.')
    end
 
  end
end

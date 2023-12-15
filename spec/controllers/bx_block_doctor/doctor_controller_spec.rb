# spec/controllers/bx_block_doctor/doctor_controller_spec.rb

require 'rails_helper'

RSpec.describe BxBlockDoctor::DoctorController, type: :controller do

  before(:each) do
    @doctor= FactoryBot.create(:doctor)
  end

    let(:create_doctor) do
        {
          "doctor":
          {"name": "rahulgaud",
          "age": 23
          }
    }
      end

      let(:update_doctor_params) do
        {
          "id": @doctor.id, # Use the ID of the doctor created in the before(:each) block
          "doctor": {
            "name": "raja",
            "age": 25
          }
        }
      end
    
      let(:delete_doctor_params) do
        {
          "id": @doctor.id,
          "doctor":
          {
            "name":"rajatanwar",
            "age":25
          }
        }
        
      end


  describe 'POST #create' do
    it 'creates a new doctor' do
      post :create, params: create_doctor
      expect(response).to have_http_status(201)
      expect(JSON.parse(response.body)['message']).to eq('doctor created successfully.')
    end

    it "list all doctors" do
      get :index , params:{doctor_id: @doctor.id}
      expect(response.status).to eq 200
    end

    it "update all doctors" do
      put :update , params: update_doctor_params
      expect(response.status).to eq 200
    end

    it "update all doctors" do
      delete :destroy  ,params: delete_doctor_params
      expect(response.status).to eq 200
    end


 
  end
end

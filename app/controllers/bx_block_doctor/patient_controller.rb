module BxBlockDoctor
    class PatientController < ApplicationController
         before_action :get_patient , only: [:update , :destroy]
       

        def create
          @patient = BxBlockDoctor::Patient.new(patient_params)
           if @patient.save
             render json: {message: "doctor created successfully."}, status: 201
           else
             render json: {error: @patient.errors.full_messages }, status: 422
           end
        end

        def index
            @patient = BxBlockDoctor::Patient.all
            render json: {doctors: @patient}
        end

        def update
            if @patient
              if @patient.update(patient_params)
                render json: { message: 'patient updated successfully.' }, status: 200
              else
                render json: { error: @patient.errors.full_messages }, status: :unprocessable_entity
              end
            else
              render json: { error: 'patient not found.' }, status: 404
            end
          end
          
          def destroy
            if @patient
              @doctor.destroy
              render json: { message: 'Doctor deleted successfully.' }, status: 200
            else
              render json: { error: 'Doctor not found.' }, status: 400
            end
          end


        private

        def get_patient
            @patient = BxBlockDoctor::Patient.find(params[:id])
        end

        def patient_params
           
            

            
        end
    end
end
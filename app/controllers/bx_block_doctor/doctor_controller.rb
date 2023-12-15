module BxBlockDoctor
    class DoctorController < ApplicationController
         before_action :get_doctor , only: [:update , :destroy]
       

        def create
          @doctor = BxBlockDoctor::Doctor.new(doctor_params)
           if @doctor.save
             render json: {message: "doctor created successfully."}, status: 201
           else
             render json: {error: @doctor.errors.full_messages }, status: 422
           end
        end

        def index
            @doctor = BxBlockDoctor::Doctor.all
            render json: {doctors: @doctor}
        end

        def update
            if @doctor
              if @doctor.update(doctor_params)
                render json: { message: 'Doctor updated successfully.' }, status: 200
              else
                render json: { error: @doctor.errors.full_messages }, status: :unprocessable_entity
              end
            else
              render json: { error: 'Doctor not found.' }, status: 404
            end
          end
          
          def destroy
            if @doctor
              @doctor.destroy
              render json: { message: 'Doctor deleted successfully.' }, status: 200
            else
              render json: { error: 'Doctor not found.' }, status: 400
            end
          end


        private

        def get_doctor
            @doctor = BxBlockDoctor::Doctor.find(params[:id])
        end

        def doctor_params
            params.require(:doctor).permit(:name , :age)
        end
    end
end
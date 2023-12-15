module BxBlockDoctor
    class AppointmentController < ApplicationController

        def create
            @appointment = BxBlockDoctor::Appointment.new(appointment_params)
            if @appointment.save
                render json: {message: "appointment created successfully."}, status: 201
            else
                render json: {error: @appointment.errors.full_messages}, status: 422
            end
        end

        def index
            @appointment = BxBlockDoctor::Appointment.all
            render json: AppointmentSerializer.new(@appointment).serializable_hash, status: 200  
        end


        private
        
        def appointment_params
            params.require(:appointment).permit(:date , :patient_id ,:doctor_id)
        end

    end

  
end
module Api
	class QuestionsController < ApplicationController
		def index 
			byebug
			@question = Question.all
			render json: @question , status: :ok
		end
		def create
			
		end
	end
end
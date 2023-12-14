class DocumentController < ApplicationController
  before_action :find_document, only: [:update]

  # def index
  #   byebug
  #   @document = Document.all
  #   render json: DocumentSerializer.new(@document) , status: :ok
  # end
  def index
    @documents = Document.all 
    render json: ActiveModel::Serializer::CollectionSerializer.new(
      @documents,
      serializer: DocumentSerializer
    ), status: :ok
  end

  def create
    @document = Document.new(document_params)
    if @document.save
      render json:@document ,status: :ok 
    else
      render json:{message: @document.full.message} ,status: :failure
    end
  end

  def update
    if @document.update(document_params)
      render json: @document, status: :ok
    else
      render json: { errors: @document.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  private

  def find_document
    @document = Document.find(params[:id])
  end

  def document_params
    params.require(:document).permit(:name , :doc_type , :image , :pic)
  end

  end

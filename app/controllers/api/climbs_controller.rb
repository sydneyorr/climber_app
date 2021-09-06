class Api::ClimbsController < ApplicationController

  def index
    render json: Climb.all
  end

  def create
    climb = Climb.new(climbs_params)
    if climb.save
      render json: climb
    else
      render json: { errors: fact.errors }, status: :unprocessable_entity
    end
  end

  def update
    climb = Climb.find(params[:id])
    if climb.update(climbs_params)
      render json: climb
    else
      render json: { errors: fact.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    climb = Climb.find(params[:id])
    render json: climb.destroy
  end


  private

  def climbs_params
    params.require(:climb).permit(:name, :rating, :location)
  end
end

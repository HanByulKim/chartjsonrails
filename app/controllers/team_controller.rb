class TeamController < ApplicationController
  before_action :authenticate_user!

  def index
    @team = current_user.teams
  end
end

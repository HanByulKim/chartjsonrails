class TaskController < ApplicationController
  def create
    @task = Task.new(:taskname => params[:taskname], :duedate => params[:duedate])
    @task.users << User.where(:id => params[:user_ids])
    @task.sender = current_user.id
    @task.wansungdo = 0
    @task.team_id = params[:team]
    if @task.save
      redirect_to action: 'show', controller: 'chat', team: params[:team]
    end
  end
  def show
    task1 = Task.where(:sender => current_user.id)
    @tasksend = task1.where(:team_id => params[:team])
    task2 = current_user.tasks
    @taskdo = task2.where(:team_id => params[:team])
  end
end
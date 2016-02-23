class TasksUsersController < ApplicationController
  before_action :set_task, only: [:create]

  def create
    TasksUser.create(task_user_params)
  end

  def destroy
    taskUser = TasksUser.find(params[:id])
    @task = taskUser.task
    taskUser.destroy
  end

  private

  def task_user_params
    params.permit(:user_id, :task_id)
  end

  def set_task
    @task = Task.find(params[:task_id])
  end

end

class TasksUsersController < ApplicationController
  before_action :set_tasks, only: [:create, :destroy]
  before_action :authenticate_user!

  def create
    @task = Task.find(params[:task_id])
    TasksUser.create(task_user_params)
  end

  def destroy
    task_user = TasksUser.find(params[:id])
    @task = task_user.task
    task_user.destroy
  end

  private

  def task_user_params
    params.permit(:user_id, :task_id)
  end

  def set_tasks
    @tasks = Task.includes(:users).all
  end
end

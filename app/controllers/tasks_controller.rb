class TasksController < ApplicationController
  def index
    @tasks = Task.doing
  end

  def new
  end

  def create
    Task.create(task_params)
  end

  def edit
    @task = Task.find(params[:id])
  end

  def update
    @task = Task.find(params[:id])
    @task.update(task_params)
  end

  private
  def task_params
    params.require(:task).permit(:title, :detail, :deadline, :category)
  end

end

class TasksController < ApplicationController
  before_action :set_tasks, only: [:index, :create, :update]
  before_action :set_task, only: [:edit, :update]

  def index
  end

  def new
    @task = Task.new
  end

  def create
    @task = Task.new(task_params)
    @flag = !!@task.save
  end

  def edit
  end

  def update
    @task.update(task_params)
  end

  private
  def task_params
    params.require(:task).permit(:title, :detail, :deadline, :category)
  end

  def set_tasks
    @tasks = Task.includes(:users).all
  end

  def set_task
    @task = Task.find(params[:id])
  end
end

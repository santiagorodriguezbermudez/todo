class TasksController < ApplicationController
  def index
    tasks = Task.find(task_params(:user_id)).all
    render json: TaskSerializer.new(tasks)
  end

  def create
    task = Task.new(task_params)
    if task.save
      render json: TaskSerializer.new(task)
    else
      render :json => { :errors => task.errors.full_messages }
    end
  end

  def update
    task = Task.find(params[:id])
    if task.update(task_params)
      render json: TaskSerializer.new(task)
    else
      render :json => { :errors => task.errors.full_messages }
    end
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
  end

  private

  def task_params
    params.require(:task).permit(:description, :state, :user_id)
  end
end

class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?
  before_filter :auth

  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up).push(:avatar)
  end

  private
  def auth
    authenticate_or_request_with_http_basic do |user,pass|
      user == 'user' && pass == 'pass'
  	end
  end

end

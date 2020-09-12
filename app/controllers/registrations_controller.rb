class RegistrationsController < Devise::RegistrationsController

  def edit
    @usuarios = User.all
  end
  private
  
  def sign_up_params
    
    params.require(:user).permit(:name, :last_name,:document, :phone, :day, :month, :year, :gender, :country, :state, :city, :address, :email, :password, :password_confirmation, :num_user)
  end

  def account_update_params
    params.require(:user).permit(:name, :last_name, :document, :phone, :day, :month, :year, :gender, :country, :state, :city, :address, :email, :password, :password_confirmation, :current_password)
  end

end
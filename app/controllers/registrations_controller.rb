class RegistrationsController < Devise::RegistrationsController

  def edit
    @usuarios = User.all
  end

  def create
    @user = User.new(sign_up_params)

    respond_to do |format|
      if @user.save
        format.html { redirect_to register_succesfull_path }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  
  def sign_up_params
    
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:name, :last_name, :document, :phone, :day, :month, :year, :gender, :country, :state, :city, :address, :email, :password, :password_confirmation, :current_password)
  end

end
require 'test_helper'

class PaymentMethodsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get payment_methods_index_url
    assert_response :success
  end

end

class WelcomeController < ApplicationController
    render json: { status: 200, message: "Temperatures API"}
end

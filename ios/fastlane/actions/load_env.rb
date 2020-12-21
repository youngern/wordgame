module Fastlane
  module Actions
    module SharedValues
      LOAD_ENV_CUSTOM_VALUE = :LOAD_ENV_CUSTOM_VALUE
    end

    class LoadEnvAction < Action
      def self.run(params)
        # fastlane will take care of reading in the parameter and fetching the environment variable:
        sh "chamber export --format dotenv wordgame/env | sed -e 's/\"//g' > ./WordGame/Staging.xcconfig"
        sh "chamber export --format dotenv fastlane/env | sed -e 's/\"//g' > ./fastlane/.env"
        sh "chamber export --format json credentials/appstore | sed 's/\\\\\\\\n/\\\\n/g' > ./fastlane/appstore.json"

        # Actions.lane_context[SharedValues::LOAD_ENV_CUSTOM_VALUE] = "my_val"
      end

      #####################################################
      # @!group Documentation
      #####################################################

      def self.description
        "Load Environment Variables from SSM"
      end

      def self.details
        # Optional:
        # this is your chance to provide a more detailed description of this action
        "Load Environment Variables from SSM"
      end

      def self.available_options
        # Define all options your action supports.

        # Below a few examples
        # [
        #   FastlaneCore::ConfigItem.new(key: :api_token,
        #                                env_name: "FL_LOAD_ENV_API_TOKEN", # The name of the environment variable
        #                                description: "API Token for LoadEnvAction", # a short description of this parameter
        #                                verify_block: proc do |value|
        #                                   UI.user_error!("No API token for LoadEnvAction given, pass using `api_token: 'token'`") unless (value and not value.empty?)
        #                                   # UI.user_error!("Couldn't find file at path '#{value}'") unless File.exist?(value)
        #                                end),
        #   FastlaneCore::ConfigItem.new(key: :development,
        #                                env_name: "FL_LOAD_ENV_DEVELOPMENT",
        #                                description: "Create a development certificate instead of a distribution one",
        #                                is_string: false, # true: verifies the input is a string, false: every kind of value
        #                                default_value: false) # the default value if the user didn't provide one
        # ]
        []
      end

      def self.output
        # # Define the shared values you are going to provide
        # # Example
        # [
        #   ['LOAD_ENV_CUSTOM_VALUE', 'A description of what this value contains']
        # ]
        []
      end

      def self.return_value
        nil
      end

      def self.authors
        ["Keet Health"]
      end

      def self.is_supported?(platform)
        # you can do things like
        #
        #  true
        #
        #  platform == :ios
        #
        #  [:ios, :mac].include?(platform)
        #

        platform == :ios
      end
    end
  end
end

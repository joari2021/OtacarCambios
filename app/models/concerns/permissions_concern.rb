module PermissionsConcern
    extend ActiveSupport::Concern

    def is_admin?
        self.permission_level >= 2
    end

end
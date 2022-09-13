from django.contrib import admin
from .models import Owner, State, Note, UserAccount

# Register your models here.


@admin.register(Owner)
class OwnerAdmin(admin.ModelAdmin):
    pass


@admin.register(State)
class StateAdmin(admin.ModelAdmin):
    pass


# admin.site.register(UserAccountManager, UserAdmin)


admin.site.register(Note)


admin.site.register(UserAccount)

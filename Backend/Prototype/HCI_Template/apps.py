from django.apps import AppConfig


class HciTemplateConfig(AppConfig):
    name = 'HCI_Template'


class AccountsConfig(AppConfig):
    name = 'accounts'

    def ready(self):
        import accounts.signals

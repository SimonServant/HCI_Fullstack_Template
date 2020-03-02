from django.http import HttpResponse


def welcome(request):
    """
    The home page. This renders the container for the single-page app.
    """
    return HttpResponse("Hello, world. Welcome to the HCI-prototype.")



from django.http import HttpResponse


def index(request):
    """
    The home page. This renders the container for the single-page app.
    """
    #obj = Book.create("Buch 1")
    # Book.save(obj)
    return HttpResponse("Hello, world. You're at the HCI-prototype index.")



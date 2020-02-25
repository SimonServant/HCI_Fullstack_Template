# HCI_Fullstack_Template
A dockerisable enviornment containing a django pyhton backend, angular frontend and mongodb database.

# Zum erstellen eines Admins
python manage.py createsuperuser

# lokale Änderungen festellen
python manage.py makemigrations

# lokale Änderungen in die Datenbank laden
python manage.py migrate

# lokale virutelle Umgebung erzeugen und aktivieren
python -m env venv
myvenv\Scripts\activate

# Windows erlaubt teilweise die Verwendung unsignierter Python Files nicht, daher:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

# aktualisieren des Python Package Managers
python -m pip install --upgrade pip

# installation der Requirements
pip install -r requirements.txt

# Starte den Server
python manage.py runserver 8000

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
----------------------------------------------------------------------------------------------------------------------
# HCI Stackoverflow Template

One Paragraph of project description goes here

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Technologies
Bootstrap 3 or 4
AngularJS 1.6 / Angular 6
Python 3.8
```

### Installing

A step by step series of examples that tell you how to get a development env running

Clone or download Project

```
git clone https://github.com/SimonServant/HCI_Fullstack_Template.git
```

Change directory to project

```
cd HCI_Fullstack_Template
```

Before we do anything else we'll create a new virtual environment, using venv. This will make sure our package configuration is kept nicely isolated from any other projects we're working on.

```
python3 -m venv env
venv\Scripts\activate.bat
```
install project requirements in our virtual env

```
pip install -r requirements.txt 
```
### Run Project

```
cd Backend\Prototype\

python manage.py runserver 8000

cd HCI_Fullstack_Template

cd Frontend

ng serve
```

## Authors

* **Simon Diener** - *Initial work* - [PurpleBooth](https://github.com/SimonServant)
* **Yousof Shehada** - *Initial work* - [PurpleBooth](https://github.com/ShehadaY)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.


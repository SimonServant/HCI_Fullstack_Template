# HCI Stackoverflow Template


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Technologies
AngularJS 1.6 / Angular 6
Angular CLI 9.0.4
Python 3.8
node 12.14.0 https://nodejs.org/en/download/ -> Download latest version
npm 6.13.4
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

* **Simon Diener** - *Initial work* - [SimonServant](https://github.com/SimonServant)
* **Yousof Shehada** - *Initial work* - [ShehadaY](https://github.com/ShehadaY)

See also the list of [contributors](https://github.com//SimonServant/HCI_Fullstack_Template/contributors) who participated in this project.


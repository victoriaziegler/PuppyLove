FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app

# Copy the top-level files
COPY requirements.txt requirements.txt
COPY manage.py manage.py

# Copy the Django project and all Django apps
COPY puppylove puppylove
COPY puppylove_rest puppylove_rest
COPY common common

RUN pip install -r requirements.txt
CMD python manage.py makemigrations && python manage.py migrate && python manage.py loaddata data.json && gunicorn puppylove.wsgi --bind 0.0.0.0:$PORT --log-file -

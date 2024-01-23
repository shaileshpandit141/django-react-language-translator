# Pull the official base image
FROM python


# Setting the woring directory
WORKDIR /translator



# Installing dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt


# Copy project files
COPY . .


EXPOSE 8000


CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]

# Pull the official base image
FROM python


# Setting the woring directory
WORKDIR /translator


# Copy project files
COPY . .


# Installing dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt



# Expose the port with 8000
EXPOSE 8000


# Run the django server
CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]

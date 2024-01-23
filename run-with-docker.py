from os import system


# Define a list of docker commands 

commands = [
    'docker build -t deep-translator .',
    'docker run -p 8000:8000 deep-translator',
]


# Running the all docker command one-by-one

for command in commands:
    system(command)
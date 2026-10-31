FROM python:3.11-slim

WORKDIR /app

COPY . /app

EXPOSE 8888

ENV PORT=8888
ENV HOST=0.0.0.0

CMD ["python3", "node_runner.py"]

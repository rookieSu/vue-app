from flask import Flask, jsonify, request
from flask_cors import CORS
from faker import Faker
import json
import random

app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route("/financialData", methods=["GET"])
def getFinancialData():
    fake = Faker('en_US')
    args = dict(request.args).copy()
    financialData = {
        "data": [],
        "cloumns": [{
            "title": 'id',
            "dataIndex": 'id',
            "key": 'id',
        },
            {
                "title": 'name',
                "dataIndex": 'name',
                "key": 'name',
            },
            {
                "title": 'address',
                "dataIndex": 'address',
                "key": 'address',
            }
        ]
    }
    data = []
    print("request args: {}".format(args))
    if (len(args) !=0 ):
        id = int(args['id'])
        for i in range(0, 100):
            print("type: {} , id: {}".format(type(id), id))
            if i == id:
                data.append({
                    "id": i,
                    "name": fake.name(),
                    "address": fake.address()
                })
        financialData['data'] = data
        print(financialData)
    else:
        for i in range(0, 100):
            data.append({
                "id": random.randint(0, 100),
                "name": fake.name(),
                "address": fake.address()
            })
        financialData['data'] = data
        print(financialData)
    return jsonify(financialData)


@app.route("/login", methods=["POST"])
def toLogin():
    data = json.loads(str(request.data, encoding="utf-8"))
    return jsonify({
        "code": 200,
        "status": "success"
    })


if __name__ == "__main__":
    app.run(debug=True)

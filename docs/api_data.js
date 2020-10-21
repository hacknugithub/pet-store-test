define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/pets/",
    "title": "",
    "sampleRequest": [
      {
        "url": "https://pet-store-api-test.herokuapp.com/api/v1/pets/"
      }
    ],
    "name": "createPets",
    "description": "<p>Create a new pet</p>",
    "group": "Pet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Required name of the pet</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tag",
            "description": "<p>Optional tag for the pet</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"Garfield\",\n  \"tag\": \"cats\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Null",
            "optional": false,
            "field": "Null",
            "description": "<p>response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"success\": true,\n \"data\": {\n    \"id\": 1,\n    \"name\": \"Oddie\",\n    \"tag\": \"dogs\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "Unexpected",
            "description": "<p>error.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/pets.js",
    "groupTitle": "Pet"
  },
  {
    "type": "get",
    "url": "/api/v1/pets/",
    "title": "",
    "sampleRequest": [
      {
        "url": "https://pet-store-api-test.herokuapp.com/api/v1/pets/?limit=100"
      }
    ],
    "name": "listPets",
    "description": "<p>Get a paged array of pets</p>",
    "group": "Pet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>Limit to 100 pets per page</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Paged",
            "description": "<p>array of pets</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"success\": true,\n  \"count\": 2,\n  \"data\": [\n      {\n          \"id\": 1,\n          \"name\": \"Garfield\",\n          \"tag\": \"cats\"\n      },\n      {\n          \"id\": 2,\n          \"name\": \"Oddie\",\n          \"tag\": \"dogs\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "Unexpected",
            "description": "<p>error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/pets.js",
    "groupTitle": "Pet"
  },
  {
    "type": "get",
    "url": "/api/v1/pets/:id",
    "title": "",
    "sampleRequest": [
      {
        "url": "https://pet-store-api-test.herokuapp.com/api/v1/pets/1"
      }
    ],
    "name": "showPetById",
    "description": "<p>Information for an specific pet</p>",
    "group": "Pet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "id",
            "description": "<p>Id for the pet you are looking</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Pet",
            "optional": false,
            "field": "A",
            "description": "<p>Pet data Model.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Error",
            "optional": false,
            "field": "Unexpected",
            "description": "<p>error Model.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/pets.js",
    "groupTitle": "Pet"
  }
] });

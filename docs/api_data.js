define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/pets/",
    "title": "",
    "name": "createPets",
    "description": "<p>Create a new pet</p>",
    "group": "Pet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
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
            "type": "Object",
            "optional": false,
            "field": "Pet",
            "description": "<p>Object containing fields id, name, tag.</p>"
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
    "groupTitle": "Pet",
    "sampleRequest": [
      {
        "url": "https://pet-store-api-test.herokuapp.com/api/v1/pets/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/pets/",
    "title": "",
    "name": "listPets",
    "description": "<p>Get a paged array of pets</p>",
    "group": "Pet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>Page number you want to get</p>"
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
          "content": "{\n  \"success\": true,\n  \"data\": [\n      \"pager\": {\n          \"totalItems\": 149,\n          \"currentPage\": 1,\n          \"pageSize\": 100,\n          \"totalPages\": 2,\n          \"startPage\": 1,\n          \"endPage\": 2,\n          \"startIndex\": 0,\n          \"endIndex\": 99,\n          \"pages\": [\n              1,\n              2\n          ]\n      },\n      \"pageOfPets\": [\n          {\n              \"id\": 1,\n              \"name\": \"Garfield\",\n              \"tag\": \"cats\"\n          },\n          {\n              \"id\": 2,\n              \"name\": \"Oddie\",\n              \"tag\": \"dogs\"\n          },\n          {\n              \"id\": 3,\n              \"name\": \"Junius\",\n              \"tag\": \"iguanas\"\n          },\n          ...\n  ]\n}",
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
    "groupTitle": "Pet",
    "sampleRequest": [
      {
        "url": "https://pet-store-api-test.herokuapp.com/api/v1/pets/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/v1/pets/:id",
    "title": "",
    "name": "showPetById",
    "description": "<p>Information for an specific pet</p>",
    "group": "Pet",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Pet",
            "description": "<p>Object containing fields id, name, tag.</p>"
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
    "groupTitle": "Pet",
    "sampleRequest": [
      {
        "url": "https://pet-store-api-test.herokuapp.com/api/v1/pets/:id"
      }
    ]
  }
] });

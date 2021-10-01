export const swaggerOptions = {
    definition: 
      {
        "openapi": "3.0.0",
        "info": {
          "title": "SEGUNDO SPRINT",
          "description": "Aplicación para que las personas se registren, inicien sesión y pidan los productos que deseen del restaurante",
          "version": "1.0.0"
        },
        "servers": [
          {
            "url": "http://localhost:5000",
            "description": "Servidor local"
          }
        ],
        "tags": [
          {
            "name": "Usuarios",
            "description": "Todos los usuarios del sistema"
          },
          {
            "name": "Productos",
            "description": "Todos los productos del sistema"
          },
          {
            "name": "Ordenes",
            "description": "Todas las ordenes de los usuarios"
          },
        ],
        "paths": {
          "/usuarios": {
            "get": {
              "tags": [
                "Usuarios"
              ],
              "summary": "Todos los usuarios del sistema",
              "description": "Todos los usuarios registrados en el sistema",
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Usuario"
                      }
                    }
                  }
                }
              }
            }
          },
          "/usuarios/nuevos": {
            "post": {
              "tags": [
                "Usuarios"
              ],
              "summary": "Para crear nuevos usuarios en el sistema",
              "description": "Crear usuarios",
              "security": [],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Usuario"
                    }
                  }
                }
              },
              "responses": {
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "/usuarios/Login": {
            "post": {
              "tags": [
                "Usuarios"
              ],
              "summary": "Para que los usuarios inicien sesión",
              "description": "Iniciar sesión",
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/UsuarioLogin"
                    }
                  }
                }
              },
              "responses": {
                "404": {
                  "description": "Not Found",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                },
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "/usuarios/Eliminar/{id}": {
            "delete": {
              "tags": [
                "Usuarios"
              ],
              "summary": "Para que los administradores eliminen usuarios del sistema",
              "description": "Para eliminar alguno de los usuarios existentes",
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "description": "Identificador del usuario",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73b"
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                }
              }
            }
          },
          "/productos": {
            "get": {
              "tags": [
                "Productos"
              ],
              "summary": "Ver todos los productos del sistema",
              "description": "Ver los productos registrados en el sistema",
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Producto"
                      }
                    }
                  }
                }
              }
            }
          },
          "/productos/nuevos": {
            "post": {
              "tags": [
                "Productos"
              ],
              "summary": "Para que los administradores creen productos en el sistema",
              "description": "Crear nuevos productos",
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Producto"
                    }
                  }
                }
              },
              "responses": {
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                }
              }
            }
          },
          "/productos/{id}": {
            "put": {
              "tags": [
                "Productos"
              ],
              "summary": "Para que los administradores editen productos en el sistema",
              "description": "Para editar propiedades de los productos existentes",
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73a"
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/Producto"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                }
              }
            }
          },
          "/productos/Eliminar/{id}": {
            "delete": {
              "tags": [
                "Productos"
              ],
              "summary": "Para que los administradores eliminen productos del sistema",
              "description": "Para eliminar alguno de los productos existentes",
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "description": "Identificador del producto",
                  "required": true,
                  "schema": {
                    "type": "string",
                    "example": "600b365c79bdd616403fc73b"
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                }
              }
            }
          },
          "/ordenes": {
            "get": {
              "tags": [
                "Ordenes"
              ],
              "summary": "Para que los administradores y usuarios vean todas las ordenes realizadas",
              "description": "Los administradores y usuarios podrán ver todas las ordenes registradas en el sistema",
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Orden"
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                }
              }
            }
          },
          "/ordenes/nuevas": {
            "post": {
              "tags": [
                "Ordenes"
              ],
              "summary": "Para empezar a llenar el esquema de las ordenes",
              "description": "Para empezar a llenar datos",
              "responses": {
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "401": {
                  "description": "Unauthorized",
                }
              }
            }
          },
          "/ordenes/Ordenar/{id}": {
            "post": {
              "tags": [
                "Ordenes"
              ],
              "summary": "Para que los usuarios terminen de crear sus ordenes en el sistema",
              "description": "Para terminar de crear la orden",
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "number",
                    "example": 1
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/DatosOrden"
                    }
                  }
                }
              },
              "responses": {
                "201": {
                  "description": "Created",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "/ordenes/{id}": {
            "put": {
              "tags": [
                "Ordenes"
              ],
              "summary": "Para que los usuarios editen las ordenes",
              "description": "Para editar propiedades de las ordenes existentes",
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "required": true,
                  "schema": {
                    "type": "number",
                    "example": 1
                  }
                }
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/DatosOrden"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "Bad Request",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "err": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "/ordenes/Eliminar/{id}": {
            "delete": {
              "tags": [
                "Ordenes"
              ],
              "summary": "Para que los administradores eliminen pedidos del sistema",
              "description": "Para eliminar alguno de los pedidos existentes",
              "parameters": [
                {
                  "in": "path",
                  "name": "id",
                  "description": "Identificador del producto",
                  "required": true,
                  "schema": {
                    "type": "number",
                    "example": 1
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "Ok",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "msg": {
                            "type": "string",
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
        },
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "components": {
          "securitySchemes": {
            "bearerAuth": {
              "type": "http",
              "scheme": "bearer"
            }
          },
          "schemas": {
            "Usuario": {
              "type": "object",
              "required": [
                "Nombre",
                "Apellido",
                "Correo",
                "Contraseña",
                "Direccion"
              ],
              "properties": {
                "Nombre": {
                  "type": "string",
                  "example": "Alex"
                },
                "Apellido": {
                  "type": "string",
                  "example": "Arango"
                },
                "Correo": {
                  "type": "string",
                  "example": "a@gmail.com"
                },
                "Contraseña": {
                  "type": "string",
                  "example": "111111"
                },
                "Direccion": {
                  "type": "string",
                  "example": "Hospital"
                }, 
                "Administrador": {
                  "type": "boolean",
                  "example": false
                }
              }
            },
            "UsuarioLogin": {
              "type": "object",
              "required": [
                "Correo",
                "Contraseña"
              ],
              "properties": {
                "Correo": {
                  "type": "string",
                  "example": "j.j@gmail.com"
                },
                "Contraseña": {
                  "type": "string",
                  "example": "111111"
                }
              }
            },
            "Producto": {
              "type": "object",
              "required": [
                "Producto",
                "Precio"
              ],
              "properties": {
                "Producto": {
                  "type": "string",
                  "example": "Cerveza"
                },
                "Precio": {
                  "type": "number",
                  "example": 4000
                }
              }
            },
            "Orden": {
              "type": "object",
              "required": [
                "NombreUsuario",
                "DireccionUsuario",
                "UsuarioId",
                "NombreProducto",
                "PrecioProducto",
                "Cantidad",
                "MediodePago"
              ],
              "properties": {
                "NombreUsuario": {
                  "type": "string",
                  "example": "Alexander"
                },
                "DireccionUsuario": {
                  "type": "string",
                  "example": "Carrera 10 #8-18"
                },
                "UsuarioId": {
                  "type": "number",
                  "example": 2
                },
                "NombreProducto": {
                  "type": "string",
                  "example": "Hamburguesa"
                },
                "PrecioProducto": {
                  "type": "number",
                  "example": 10000
                },
                "Cantidad": {
                  "type": "number",
                  "example": 1
                },
                "MediodePago": {
                  "type": "string",
                  "example": "Efectivo"
                },
              }
            },
            "DatosOrden": {
              "type": "object",
              "required": [
                "ProductoId",
                "Cantidad",
                "MediodePago"
              ],
              "properties": {
                "ProductoId": {
                  "type": "number",
                  "example": 1
                },
                "Cantidad": {
                  "type": "number",
                  "example": 1
                },
                "MediodePago": {
                  "type": "string",
                  "example": "Efectivo"
                },
              }
            },
          }
        }
      },
    apis: ['./src/routes*.js']
  };
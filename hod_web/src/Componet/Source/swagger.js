const data = {
    "swagger": "2.0",
    "info": {
        "description": "อ่อก็หน้าไว้ดู Api",
        "title": "Numerical Method"
    },
    "host": "localhost:4040/data",
    "tags": [
        {
            "name": "Root of Equation",
            "description": "โจทย์ Root of Equation",
        },
        {
            "name": "Matrix",
            "description": "โจทย์ Matrix",
        }
    ],
    "schemes": [
        "http"
    ],
    
    "paths": {
        "/root": {
            "get": {
                "tags": [
                    "Root of Equation"
                ],
                "summary": "แสดงข้อมูลทั้งหมด",
                "responses": {
                    "200": {
                        "description": "ทำงานสำเร็จ"
                    },
                    "404": {
                        "description": "ทำงานไม่สำเร็จ"
                    }
                }
            }
        },
        "/root/{name}": {
            "get": {
                "tags": [
                    "Root of Equation"
                ],
                "summary": "ค้นหาโจทย์ทั้งหมดในเรื่อง Root of Equation",
                "parameters": [
                    {
                        "name": "name",
                        "in": "path",
                        "description": "ชื่อของ method",
                        "required": false,
                        "type": "string",
                        "format": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "ทำงานสำเร็จ"
                    }
                }
            }
        },
        "/matrix": {
            "get": {
                "tags": [
                    "Matrix"
                ],
                "summary": "แสดงข้อมูลทั้งหมด",
                "responses": {
                    "200": {
                        "description": "ทำงานสำเร็จ"
                    },
                    "404": {
                        "description": "ทำงานไม่สำเร็จ"
                    }
                }
            }
        },
        "/matrix/{name}": {
            "get": {
                "tags": [
                    "Matrix"
                ],
                "summary": "ค้นหาโจทย์ทั้งหมดในเรื่อง Matrix",
                "parameters": [
                    {
                        "name": "name",
                        "in": "path",
                        "description": "ชื่อของ method",
                        "required": false,
                        "type": "string",
                        "format": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "ทำงานสำเร็จ"
                    }
                }
            }
        }
        
    }
}

export { data }
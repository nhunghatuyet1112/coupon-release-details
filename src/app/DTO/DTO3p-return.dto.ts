export class PRODUCT {
    StatusCode: number;
    ErrorString: null;
    ObjectReturn: any;

    constructor(statusCode: number, errorString: null, objectReturn) {
        this.StatusCode = statusCode;
        this.ErrorString = errorString;
        this.ObjectReturn = objectReturn;
    }
}

export class newProduct {
    DTO: any;
    Properties: string[];

    constructor(dto, properties: Array<string>) {
        this.DTO = dto;
        this.Properties = properties;
    }
}
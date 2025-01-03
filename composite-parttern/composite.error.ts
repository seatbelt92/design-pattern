export abstract class BaseError extends Error {
    constructor(
        private statusCode: number,
        private code: string,
    ) {
        super();
    }
}

export class UnsupportedOperationError extends BaseError {
    constructor() {
        super(400, "UNSUPPORTED_OPERATION_ERROR");
    }
}

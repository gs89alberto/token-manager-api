export class HttpException extends Error {
    status: number;
    error: string | null;
    constructor(status: number, message: string, error?: string) {
        super(message);
        this.status = status;
        this.error = error || null;
    }
}

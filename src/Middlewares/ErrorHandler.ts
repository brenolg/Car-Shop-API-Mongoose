import { NextFunction, Request, Response } from 'express';
import ApiError from '../Utils/ApiError';

class ErrorHandler {
  public static handle(
    error: Error & Partial<ApiError>,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    // console.log('ERROR', error);
    const { status, message } = error;
    return res.status(status || 500).json({ message });
  }
}

export default ErrorHandler;

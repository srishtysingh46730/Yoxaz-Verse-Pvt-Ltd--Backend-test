import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../config/jwt';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Extract token from headers, cookies, etc.
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded.userId; // Attach userId to request object
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};

export default authMiddleware;